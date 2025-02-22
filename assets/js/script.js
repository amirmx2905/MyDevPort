document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.links a');
    const checkbox = document.getElementById('sidebar--active');
    const mainContent = document.querySelector('.main__content');

    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Cierra el sidebar
            checkbox.checked = false;

            // Fade out
            mainContent.classList.add('fade-out');
            
            // Espera a que termine la animación
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Aquí puedes cambiar el contenido si lo deseas
            
            // Fade in
            mainContent.classList.remove('fade-out');
        });
    });
});