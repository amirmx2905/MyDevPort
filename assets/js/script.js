document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.links a');
    const checkbox = document.getElementById('sidebar--active');
    const mainContent = document.querySelector('.main__content');
    
    const setActiveLink = (clickedLink) => {
        navLinks.forEach(link => {
            link.classList.remove('pressed');
        });
        clickedLink.classList.add('pressed');
    };

    const aboutMeLink = document.getElementById('aboutMe');
    setActiveLink(aboutMeLink);

    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            
            checkbox.checked = false;
            
            setActiveLink(e.target);
            
            mainContent.classList.add('fade-out');
            
            await new Promise(resolve => setTimeout(resolve, 300));
                        
            mainContent.classList.remove('fade-out');
        });
    });
});