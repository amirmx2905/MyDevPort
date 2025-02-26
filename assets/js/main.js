document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.links a');
    const checkbox = document.getElementById('sidebar--active');
    const mainContent = document.querySelector('.main__content');
    
    const attachCardListeners = () => {
        const cards = document.querySelectorAll('.skill__card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (window.innerWidth <= 915) {
                    const cardInner = card.querySelector('.skill__card-inner');
                    cardInner.classList.toggle('is-flipped');
                }
            });
        });
    };

    // Project data
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

    // Function to initialize the project grid
    const initializeProjectGrid = () => {
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');
        const groups = document.querySelectorAll('.item-group');
        
        if (!prevArrow || !nextArrow || groups.length === 0) return;
        
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
    };

    // Function to initialize the project modal
    const initializeProjectModal = () => {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');
        const modalClose = document.getElementById('modal-close');
        const githubBtn = document.getElementById('github-btn');
        
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
            if (techLogos) {
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

        // Attach event listeners to project items
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

        // GitHub button click event
        if (githubBtn) {
            githubBtn.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                if (url && url !== '#') {
                    window.open(url, '_blank');
                }
            });
        }

        // Modal close button click event
        if (modalClose) {
            modalClose.addEventListener('click', closeProjectModal);
        }
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeProjectModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                closeProjectModal();
            }
        });
    };

    const contentSections = {
        aboutMe: `
            <div class="main__content__container"> 
                <div class="content__container">
                    <h2 class="content__subtitle">About Me</h2>
                        <p class="content__text">
                            Hi, I'm a software developer with a strong foundation in design and programming.
                            Passionate about solving complex problems with attention to detail. Committed to continuous learning
                            and staying updated with industry trends. Strong collaborator with excellent communication skills.
                        </p>
                </div>
                <div class="content__video">
                    <video class="center__video" autoplay muted loop playsinline>
                        <source src="assets/videos/memoji.mp4" type="video/mp4">
                        Your browser does not support the video tag
                    </video>
                </div>
            </div>
            <div class="main__content__container below">
                <h2 class="content__subtitle">Development Languages</h2>
                    <div class="scroll__container">
                        <div class="scroll__content">
                            <img class="scroll__img" src="assets/img/iconCPP.svg" title="C++" alt="C++">
                            <img class="scroll__img" src="assets/img/iconCSharp.svg" title="C#" alt="C#">
                            <img class="scroll__img" src="assets/img/iconJava.svg" title="Java" alt="Java">
                            <img class="scroll__img" src="assets/img/iconKotlin.svg" title="Kotlin" alt="Kotlin">
                            <img class="scroll__img" src="assets/img/iconPython.svg" title="Python" alt="Python">
                            <img class="scroll__img" src="assets/img/iconSwift.svg" title="Swift" alt="Swift">
                            <img class="scroll__img" src="assets/img/iconHTML.svg" title="HTML" alt="HTML">
                            <img class="scroll__img" src="assets/img/iconCSS.svg" title="CSS" alt="CSS">
                            <img class="scroll__img" src="assets/img/iconJavaScript.svg" title="JavaScript" alt="JavaScript">
                            <img class="scroll__img" src="assets/img/iconMySQL.svg" title="MySQL" alt="MySQL">
                            <img class="scroll__img" src="assets/img/iconPostgreSQL.svg" title="PostgreSQL" alt="PostgreSQL">
                            
                            <img class="scroll__img" src="assets/img/iconCPP.svg" title="C++" alt="C++">
                            <img class="scroll__img" src="assets/img/iconCSharp.svg" title="C#" alt="C#">
                            <img class="scroll__img" src="assets/img/iconJava.svg" title="Java" alt="Java">
                            <img class="scroll__img" src="assets/img/iconKotlin.svg" title="Kotlin" alt="Kotlin">
                            <img class="scroll__img" src="assets/img/iconPython.svg" title="Python" alt="Python">
                            <img class="scroll__img" src="assets/img/iconSwift.svg" title="Swift" alt="Swift">
                            <img class="scroll__img" src="assets/img/iconHTML.svg" title="HTML" alt="HTML">
                            <img class="scroll__img" src="assets/img/iconCSS.svg" title="CSS" alt="CSS">
                            <img class="scroll__img" src="assets/img/iconJavaScript.svg" title="JavaScript" alt="JavaScript">
                            <img class="scroll__img" src="assets/img/iconMySQL.svg" title="MySQL" alt="MySQL">
                            <img class="scroll__img" src="assets/img/iconPostgreSQL.svg" title="PostgreSQL" alt="PostgreSQL">
                        </div>
                    </div>
            </div>
            <div class="main__content__container below">
                <h2 class="content__subtitle">Soft Skills</h2>
                <div class="skills__container">
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconAdaptability.svg" alt="Adaptability">
                            </div>
                            <div class="skill__card-back">
                                <h3>Adaptability</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconTeamWork.svg" alt="Team Work">
                            </div>
                            <div class="skill__card-back">
                                <h3>Team Work</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconCommunication.svg" alt="Communication">
                            </div>
                            <div class="skill__card-back">
                                <h3>Communication</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconProblemSolving.svg" alt="Problem Solving">
                            </div>
                            <div class="skill__card-back">
                                <h3>Problem Solving</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconOrganizational.svg" alt="Organizational">
                            </div>
                            <div class="skill__card-back">
                                <h3>Organizational</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconAttention.svg" alt="Attention to Detail">
                            </div>
                            <div class="skill__card-back">
                                <h3>Attention to Detail</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconThinking.svg" alt="Critical Thinking">
                            </div>
                            <div class="skill__card-back">
                                <h3>Critical Thinking</h3>
                            </div>
                        </div>
                    </div>
                    <div class="skill__card">
                        <div class="skill__card-inner">
                            <div class="skill__card-front">
                                <img src="assets/img/iconTime.svg" alt="Time Management">
                            </div>
                            <div class="skill__card-back">
                                <h3>Time Management</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main__content__container last below"> 
                <div class="content__container interest__container">
                    <h2 class="content__subtitle">Areas of Interest</h2>
                    <p class="content__text">
                        I aim to learn and improve in AI technologies like machine learning, neural
                        networks, and NLP, as well as in mobile development, focusing on creating 
                        high-performance apps with strong UI/UX and integrating AI.
                    </p>
                </div>
            </div>
        `,
        experience: `
            <div class="main__content__container column start">
                <div class="content__container__experience">
                    <img class="content__img" src="assets/img/logoTeleperformance.png" alt="caritasWebsite">
                    <h2 class="content__subtitle__experience">Retention Agent at Tele-Performance</h2>
                    <h3 class="content__subtitle__experience no-shadow">May 2023 - July 2023</h3>
                    <p class="content__text experience-text no-shadow">
                        At Tele-Performance, I worked as a Retention Agent focused on maintaining the company's client base. I analyzed customer situations to understand their concerns about leaving the company and used effective communication skills to engage with them. By applying problem-solving and negotiation techniques, I created tailored offers that addressed their specific needs, contributing directly to successful client retention.                    </p>
                </div>
                <div class="content__container__experience">
                    <img class="content__img" src="assets/img/caritasImage.png" alt="caritasWebsite">
                    <h2 class="content__subtitle__experience">Web Developer at Cáritas de Guadalajara</h2>
                    <h3 class="content__subtitle__experience no-shadow">Aug 2023 - May 2024</h3>
                    <p class="content__text experience-text no-shadow">
                        As a Web Developer at Cáritas de Guadalajara, I collaborated on developing a new interactive website that effectively communicated the organization's mission to all ages. Using Visual Studio, I implemented HTML for structure, CSS for styling, and JavaScript for interactive features. This project allowed me to apply my technical skills in a meaningful social context while strengthening my web development capabilities.
                    </p>
                </div>
            </div>
        `,
        projects: `
            <div class="main__content__container">
                <div class="grid__wrapper">
                    <img src="assets/img/leftArrow.svg" class="prev-arrow" alt="prev-arrow">
                    <div class="grid__container">
                        <div class="item-group active" id="group-1">
                            <div class="item">
                                <img class="item-img" src="assets/img/imgPortfolio.png" alt="imgPortfolio">
                                <h2 class="item-subtitle">MyDevPort</h2>
                            </div>
                        </div>
                    </div>
                    <img src="assets/img/rightArrow.svg" class="next-arrow" alt="next-arrow">
                </div>
            </div>
            <div class="project-modal" id="project-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="github-btn" id="github-btn">
                            <img src="assets/img/iconGithub.svg" alt="GitHub">
                        </div>
                        <h2 class="modal-title" id="modal-title">Título del Proyecto</h2>
                        <div class="close-btn" id="modal-close">
                            <img src="assets/img/iconClose.svg" alt="Cerrar">
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="project-image">
                            <img src="" alt="Imagen del proyecto" id="modal-image">
                        </div>
                        <div class="project-description" id="modal-description">
                            <p>Descripción del proyecto...</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <h3 class="footer-title">Technologies Used</h3>
                        <div class="tech-logos"></div>
                    </div>
                </div>
            </div>
        `,
        certifications: `
            Certifications
        `,
        contact: `
            Contact
        `
    };

    const setActiveLink = (clickedLink) => {
        navLinks.forEach(link => {
            link.classList.remove('pressed');
        });
        clickedLink.classList.add('pressed');
    };

    const loadContent = async (sectionId) => {
        mainContent.classList.add('fade-out');
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        mainContent.innerHTML = contentSections[sectionId];
        
        // Initialize specific components for each section
        if (sectionId === 'aboutMe') {
            attachCardListeners();
        } else if (sectionId === 'projects') {
            initializeProjectGrid();
            initializeProjectModal();
        }
        
        mainContent.classList.remove('fade-out');
    };

    const aboutMeLink = document.getElementById('aboutMe');
    setActiveLink(aboutMeLink);
    loadContent('aboutMe');

    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            checkbox.checked = false;
            setActiveLink(e.target);
            await loadContent(e.target.id);
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 915) {
            document.querySelectorAll('.skill__card-inner').forEach(cardInner => {
                cardInner.classList.remove('is-flipped');
            });
        }
    });
});