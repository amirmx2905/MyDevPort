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
            description: 'Portafolio de desarrollo personalizado con características interactivas y diseño responsivo. Este proyecto fue creado utilizando HTML, CSS y JavaScript puro para mostrar mis habilidades y proyectos de manera atractiva.',
            image: 'assets/img/imgPortfolio.png',
            githubUrl: 'https://github.com/amirmx2905/MyDevPort'
        },
        // Puedes añadir más proyectos aquí
    ];

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const githubBtn = document.getElementById('github-btn');
    
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId) || {
            title: 'Proyecto',
            description: 'Descripción del proyecto no disponible.',
            image: 'assets/img/imgPortfolio.png',
            githubUrl: '#' // URL por defecto si no se encuentra el proyecto
        };

        modalTitle.textContent = project.title;
        modalDescription.innerHTML = `<p>${project.description}</p>`;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        
        // Guardar la URL de GitHub como atributo de datos para usarlo en el evento click
        githubBtn.setAttribute('data-url', project.githubUrl);
        
        modal.classList.add('show');
        
        // Centrar la ventana modal en la pantalla
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
        }, 10); // Reducido a 10ms para un centrado más rápido
    }

    function closeProjectModal() {
        modal.classList.remove('show');
        
        setTimeout(() => {
            if (!modal.classList.contains('show')) {
                modalTitle.textContent = '';
                modalDescription.innerHTML = '';
                modalImage.src = '';
            }
        }, 300);
    }

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Obtener el id del proyecto del subtítulo o de un atributo data-*
            const subtitle = item.querySelector('.item-subtitle');
            const projectId = subtitle ? 
                subtitle.textContent.trim().toLowerCase().replace(/\s+/g, '') : 
                'project';
            
            openProjectModal(projectId);
        });
    });

    // Evento para abrir el repositorio de GitHub
    githubBtn.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url && url !== '#') {
            // Abrir en una nueva pestaña
            window.open(url, '_blank');
        }
    });

    // Evento para cerrar el modal
    modalClose.addEventListener('click', closeProjectModal);
    
    // Cerrar el modal si se hace clic fuera del contenido
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });
    
    // Cerrar el modal con la tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeProjectModal();
        }
    });
});