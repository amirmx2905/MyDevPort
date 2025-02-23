/*document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.links a');
    const checkbox = document.getElementById('sidebar--active');
    const mainContent = document.querySelector('.main__content');
    
    // Content for each section
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
                <div class="content__img">
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
}); */

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