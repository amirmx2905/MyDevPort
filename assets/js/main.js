/*document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.links a');
    const checkbox = document.getElementById('sidebar--active');
    const mainContent = document.querySelector('.main__content');
    
    // Content for each section
    const contentSections = {
        aboutMe: `
            
        `,
        academics: `
            //texto
        `,
        projects: `
            //texto
        `,
        certifications: `
            //texto
        `,
        contact: `
            //texto
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
        
        // Wait for fade out animation
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Update content
        mainContent.innerHTML = contentSections[sectionId];
        
        mainContent.classList.remove('fade-out');
    };

    // Set initial content
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
});*/

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill__card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Solo aplicar el toggle si la pantalla es menor a 915px
            if (window.innerWidth <= 915) {
                const cardInner = card.querySelector('.skill__card-inner');
                cardInner.classList.toggle('is-flipped');
            }
        });
    });

    // Opcional: Remover la clase is-flipped cuando la pantalla se hace más grande
    window.addEventListener('resize', () => {
        if (window.innerWidth > 915) {
            document.querySelectorAll('.skill__card-inner').forEach(cardInner => {
                cardInner.classList.remove('is-flipped');
            });
        }
    });
});