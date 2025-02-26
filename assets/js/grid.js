document.addEventListener('DOMContentLoaded', function() {
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const groups = document.querySelectorAll('.item-group');
    let currentGroup = 0;
    const totalGroups = groups.length;
    let isAnimating = false;
    
    function isMobileView() {
        return window.innerWidth <= 480;
    }
    
    function initGroups() {
        if (isMobileView()) {
            groups.forEach(group => {
                group.className = 'item-group';
            });
            return;
        }
    
        groups.forEach((group, index) => {
            group.classList.remove('slide-from-left', 'slide-to-right', 'slide-from-right', 'slide-to-left');
            if (index === currentGroup) {
                group.className = 'item-group active';
            } else if (index === (currentGroup + 1) % totalGroups) {
                group.className = 'item-group next';
            } else {
                group.className = 'item-group prev';
            }
        });
    }
    
    initGroups();
    window.addEventListener('resize', initGroups);
    
    function onAnimationEnd(element, callback) {
        if (isMobileView()) {
            callback();
            return;
        }
    
        const animations = {
            'animation': 'animationend',
            'OAnimation': 'oAnimationEnd',
            'MozAnimation': 'animationend',
            'WebkitAnimation': 'webkitAnimationEnd'
        };
    
        for (const t in animations) {
            if (element.style[t] !== undefined) {
                element.addEventListener(animations[t], function onEnd() {
                element.removeEventListener(animations[t], onEnd);
                callback();
                });
                return;
            }
        }
        setTimeout(callback, 600);
    }
    
    prevArrow.addEventListener('click', function() {
        if (isMobileView() || isAnimating) return;

        isAnimating = true;
        const prevGroup = (currentGroup - 1 + totalGroups) % totalGroups;
        groups[prevGroup].className = 'item-group prev';
        void groups[prevGroup].offsetWidth;
        groups[prevGroup].classList.add('slide-from-left');
        groups[currentGroup].classList.add('slide-to-right');
    
        onAnimationEnd(groups[currentGroup], function() {
            currentGroup = prevGroup;
            initGroups();
            isAnimating = false;
        });
    });
    
    nextArrow.addEventListener('click', function() {
        if (isMobileView() || isAnimating) return;
        
        isAnimating = true;
        const nextGroup = (currentGroup + 1) % totalGroups;
        groups[nextGroup].className = 'item-group next';
        void groups[nextGroup].offsetWidth;
        groups[nextGroup].classList.add('slide-from-right');
        groups[currentGroup].classList.add('slide-to-left');
    
        onAnimationEnd(groups[currentGroup], function() {
            currentGroup = nextGroup;
            initGroups();
            isAnimating = false;
        });
    });

    const projectsData = [
        {
            id: 'mydevport',
            title: 'MyDevPort',
            description: 'MyDevPort is my personal development portfolio showcasing my technical skills and projects through a responsive interface built with vanilla HTML, CSS, and JavaScript. The site features an interactive project gallery smooth animations, and project showcases. Visitors can explore my development journey through visual representations of my technical competencies, highlights of my work experience, and browse my professional certifications. A contact section provides multiple ways to reach me, including a validated form, social media links, and an email designed to demonstrate my proficiency in front-end fundamentals while maintaining cross-device compatibility.',
            image: 'assets/img/imgPortfolio.png',
            githubUrl: 'https://github.com/amirmx2905/MyDevPort',
            technologies: ['html', 'css', 'javascript']
        },
        // ADD more projects here
    ];

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const githubBtn = document.getElementById('github-btn');
    
    // Check if modal content already has footer, if not add it
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent.querySelector('.modal-footer')) {
        const modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';
        modalFooter.innerHTML = `
            <h3 class="footer-title">Technologies Used</h3>
            <div class="tech-logos"></div>
        `;
        modalContent.appendChild(modalFooter);
        
        // Add CSS for the modal footer if not already present
        if (!document.querySelector('style#modal-footer-styles')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'modal-footer-styles';
            styleTag.textContent = `
                .modal-footer {
                    padding-top: 15px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                .footer-title {
                    font-size: 1.2rem;
                    margin: 0;
                    text-shadow: 0 0 5px #fff;
                }
                
                .tech-logos {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    justify-content: flex-start;
                    align-items: center;
                }
                
                .tech-logo {
                    width: 35px;
                    height: 35px;
                    transition: all 0.3s ease;
                    filter: grayscale(0.5);
                }
                
                .tech-logo:hover {
                    transform: scale(1.2);
                    filter: grayscale(0) drop-shadow(0 0 3px #fff);
                }
                
                @media screen and (max-width: 600px) {
                    .tech-logos {
                        justify-content: center;
                    }
                    
                    .tech-logo {
                        width: 30px;
                        height: 30px;
                    }
                }
            `;
            document.head.appendChild(styleTag);
        }
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId) || {
            title: 'Proyecto',
            description: 'Descripción del proyecto no disponible.',
            image: 'assets/img/imgPortfolio.png',
            githubUrl: '#',
            technologies: []
        };

        modalTitle.textContent = project.title;
        modalDescription.innerHTML = `<p>${project.description}</p>`;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        
        githubBtn.setAttribute('data-url', project.githubUrl);
        
        // Update technology logos
        const techLogos = document.querySelector('.tech-logos');
        techLogos.innerHTML = '';
        
        if (project.technologies && project.technologies.length > 0) {
            project.technologies.forEach(tech => {
                const logoPath = `assets/img/icon${capitalizeFirstLetter(tech)}.svg`;
                const logoImg = document.createElement('img');
                logoImg.src = logoPath;
                logoImg.alt = tech;
                logoImg.title = capitalizeFirstLetter(tech);
                logoImg.className = 'tech-logo';
                techLogos.appendChild(logoImg);
            });
        }
        
        modal.classList.add('show');
        
        setTimeout(() => {
            const modalContent = document.querySelector('.modal-content');
            if (modalContent) {
                const modalRect = modalContent.getBoundingClientRect();
                const scrollToY = window.scrollY + modalRect.top + (modalRect.height / 2) - (window.innerHeight / 2);
                
                window.scrollTo({
                    top: scrollToY,
                    behavior: 'smooth'
                });
            }
        }, 10); 
    }

    function closeProjectModal() {
        modal.classList.add('hide');
        
        setTimeout(() => {
            modal.classList.remove('show');
            
            setTimeout(() => {
                modalTitle.textContent = '';
                modalDescription.innerHTML = '';
                modalImage.src = '';
                modal.classList.remove('hide'); 
            }, 50);
            
        }, 400);
    }

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            const subtitle = item.querySelector('.item-subtitle');
            const projectId = subtitle ? 
                subtitle.textContent.trim().toLowerCase().replace(/\s+/g, '') : 
                'project';
            
            openProjectModal(projectId);
        });
    });

    githubBtn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });

    modalClose.addEventListener('click', closeProjectModal);
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeProjectModal();
        }
    });
});