/**
 * INDEX - SEARCH KEYWORDS
 * ======================
 * [INIT] - Document initialization
 * [NAV] - Navigation handling
 * [CARDS] - Skill cards listeners
 * [PROJECTS_DATA] - Project data object
 * [GRID] - Project grid initialization and animations
 * [MODAL] - Project modal initialization and handling
 * [SECTIONS] - Content sections HTML
 * [CONTENT_LOAD] - Content loading functions
 * [EVENT_LISTENERS] - All event listeners
 */

/* TO ADD MORE PROJECTS OR CERTIFICATES:
    * 1. Add the image to the assets folder
    * 2. Add the image to imagesToPreload array in the preloadImages function
    * 3. Add the project data to the projectsData array
        - For controlling project image size in modal, add modalImageSize property:
        - 'small' (50% width), 'medium' (75% width), or 'large' (100% width)
    * 4. Add the certification data to the certificationsData array
    * 5. Add the project to the project grid in the HTML
    * 6. Add the certification to the certifications grid in the HTML
*/

document.addEventListener("DOMContentLoaded", function () {
  // [PRELOAD] - Preload images function
  function preloadImages() {
    // Lista de imágenes a precargar
    const imagesToPreload = [
      "assets/img/iconLinkedin.svg",
      "assets/img/iconGithub.svg",
      "assets/img/iconMenu.svg",
      "assets/img/iconArrowDown.svg",
      "assets/img/imgGoogleMaps.webp",
      "assets/img/imgInvestigators.webp",
      "assets/img/imgPlaybook.webp",
      "assets/img/imgPlaybook2.webp",
      "assets/img/imgPokemon.webp",
      "assets/img/imgPortfolio.webp",
      "assets/img/imgNotes.webp",
      "assets/img/imgTecmilenio.webp",
      "assets/img/caritasImage.webp",
      "assets/img/logoTeleperformance.webp",
      "assets/img/photo.webp",
    ];

    imagesToPreload.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }

  preloadImages();

  // [NAV] - Navigation elements
  const navLinks = document.querySelectorAll(".links a");
  const checkbox = document.getElementById("sidebar--active");
  const mainContent = document.querySelector(".main__content");
  const quickLinks = document.querySelectorAll(".footer__container ul li a");
  const mainSection = document.getElementById("main-content");

  // [CARDS] - Function to attach event listeners to skill cards
  const attachCardListeners = () => {
    const cards = document.querySelectorAll(".skill__card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (window.innerWidth <= 1035) {
          const cardInner = card.querySelector(".skill__card-inner");
          cardInner.classList.toggle("is-flipped");
        }
      });
    });
  };

  // [DATA] - Project data array containing all project information
  const projectsData = [
    {
      id: "mydevport",
      title: "MyDevPort",
      description:
        "MyDevPort is my personal development portfolio showcasing my technical skills and projects through a responsive interface built with vanilla HTML, CSS, and JavaScript. The site features an interactive project gallery smooth animations, and project showcases. Visitors can explore my development journey through visual representations of my technical competencies, highlights of my work experience, and browse my professional certifications. A contact section provides multiple ways to reach me, including a validated form, social media links, and an email designed to demonstrate my proficiency in front-end fundamentals while maintaining cross-device compatibility.",
      image: "assets/img/imgPortfolio.webp",
      githubUrl: "https://github.com/amirmx2905/MyDevPort",
      technologies: ["html", "css", "javascript"],
    },
    {
      id: "gmapsapiapp",
      title: "GmapsAPI App",
      description:
        "This repository uses the Google Cloud Console API Key to find addresses, store user data in an internal SQLite3 database, and display their locations on a Google Maps map within the same application. It implements data storage and geolocation using Google services.",
      image: "assets/img/imgGoogleMaps.webp",
      githubUrl: "https://github.com/amirmx2905/AndroidStudioGoogleMapsAPI",
      technologies: ["android", "java", "google"],
    },
    {
      id: "pokemonbattlearena",
      title: "Pokemon BA",
      description:
        "In this repository, I was assigned to the backend team. We used C++ along with libraries like Asio and Crow to connect the backend with the database and with frontend. The goal on the backend side was to develop a server capable of handling all frontend requests. Additionally, we integrated the PokéAPI to create a game where users can capture, train, and battle with all first-generation Pokémon.",
      image: "assets/img/imgPokemon.webp",
      githubUrl: "https://github.com/Cesar-Mendoza-V/PokemonBattleArena",
      technologies: ["cpp", "mysql"],
    },
    {
      id: "investiapp",
      title: "InvestiApp",
      description:
        "This project was basically about creating a mobile application with Android Studio, Java, Kotlin, PHP, and a MySQL database. I did everything that is typically done in a real-life project, from scope definition, planning, UML diagramming, coding, etc. The goal was to simulate an application where researchers from all over Mexico could connect with each other to find people related to their area or field of research, with whom they could collaborate on projects, articles, events, etc. This application is essentially a LinkedIn for CONACYT.",
      image: "assets/img/imgInvestigators.webp",
      githubUrl: "https://github.com/amirmx2905",
      technologies: ["android", "kotlin", "java", "php", "mysql"],
    },
    {
      id: "playbook",
      title: "PlayBook",
      description:
        "A fully native Sport Courts Booking iOS App built using SwiftUI. This project focuses on delivering an elegant and user-friendly experience for booking sports courts.",
      image: "assets/img/gifPlaybook.gif",
      githubUrl: "https://github.com/JaimeTAR/PlayBook",
      technologies: ["swift", "ios"],
      modalImageSize: "small",
    },
    {
      id: "notes",
      title: "Notes App",
      description:
        "This full-stack web application combines Django REST Framework and React to create a secure note-taking platform. It features user authentication via JWT, CRUD operations for notes, and a modern, responsive UI with Tailwind CSS. The app uses PostgreSQL for data storage and supports protected routes. ",
      image: "assets/img/imgNotes.webp",
      githubUrl: "https://github.com/amirmx2905/firstDjangoReactWebApp",
      technologies: ["django", "react", "tailwind", "postgres"],
    },
    // ADD more projects here
  ];

  // [DATA] - Certification data array containing all certification information
  const certificationsData = [
    {
      id: "devops",
      title: "DevOps",
      description:
        "Currently progressing through a comprehensive DevOps program where I'm mastering CI/CD implementation, Git version control, and infrastructure automation using IaC tools with integrated security practices. Developing expertise in Kubernetes for containerized application orchestration and implementing monitoring solutions with Prometheus and Grafana for observability, with additional modules still to complete.",
      image: "assets/img/imgTecmilenio.webp",
      status: "in-progress",
      certUrl: "#",
    },
    {
      id: "appdevelop",
      title: "App Development",
      description:
        "Currently advancing through a mobile development program where I'm getting a foundational understanding of mobile application architecture and design principles. Developed hands-on experience creating native Android applications using Java/Kotlin with Android Studio, implementing UI components, and managing application lifecycles. Also acquired skills in iOS development using Swift and Xcode, including interface design with UIKit/SwiftUI and implementing core iOS frameworks, with additional modules still to complete.",
      image: "assets/img/imgTecmilenio.webp",
      status: "in-progress",
      certUrl: "#",
    },
    {
      id: "bigdata",
      title: "Big Data",
      description:
        "Currently progressing through a Big Data program where I'm establishing a strong programming fundamentals for data manipulation and analysis using Python and R. Developed expertise in data engineering principles including ETL processes, data warehousing, and working with structured/unstructured datasets. Gained practical knowledge of Big Data infrastructure deployment including Hadoop ecosystem, distributed computing frameworks, and cloud-based data solutions, with additional modules still to complete.",
      image: "assets/img/imgTecmilenio.webp",
      status: "in-progress",
      certUrl: "#",
    },
    // ADD more certifications as needed
  ];

  // [GRID] - Function to initialize the project grid with carousel functionality
  const initializeProjectGrid = () => {
    const prevArrow = document.querySelector(".projects .prev-arrow");
    const nextArrow = document.querySelector(".projects .next-arrow");
    const groups = document.querySelectorAll(".projects .item-group");

    if (!prevArrow || !nextArrow || groups.length === 0) return;

    let currentGroup = 0;
    const totalGroups = groups.length;
    let isAnimating = false;

    // [GRID_MOBILE] - Check if in mobile view
    function isMobileView() {
      return window.innerWidth <= 480;
    }

    // [GRID_INIT] - Initialize group classes based on view
    function initGroups() {
      if (isMobileView()) {
        groups.forEach((group) => {
          group.className = "item-group";
        });
        return;
      }

      groups.forEach((group, index) => {
        group.classList.remove(
          "slide-from-left",
          "slide-to-right",
          "slide-from-right",
          "slide-to-left"
        );
        if (index === currentGroup) {
          group.className = "item-group active";
        } else if (index === (currentGroup + 1) % totalGroups) {
          group.className = "item-group next";
        } else {
          group.className = "item-group prev";
        }
      });
    }

    initGroups();

    // [GRID_ANIMATION] - Handle animation end events
    function onAnimationEnd(element, callback) {
      if (isMobileView()) {
        callback();
        return;
      }

      const animations = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
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

    // [GRID_PREV] - Previous arrow click handler
    prevArrow.addEventListener("click", function () {
      if (isMobileView() || isAnimating) return;

      isAnimating = true;
      const prevGroup = (currentGroup - 1 + totalGroups) % totalGroups;
      groups[prevGroup].className = "item-group prev";
      void groups[prevGroup].offsetWidth;
      groups[prevGroup].classList.add("slide-from-left");
      groups[currentGroup].classList.add("slide-to-right");

      onAnimationEnd(groups[currentGroup], function () {
        currentGroup = prevGroup;
        initGroups();
        isAnimating = false;
      });
    });

    // [GRID_NEXT] - Next arrow click handler
    nextArrow.addEventListener("click", function () {
      if (isMobileView() || isAnimating) return;

      isAnimating = true;
      const nextGroup = (currentGroup + 1) % totalGroups;
      groups[nextGroup].className = "item-group next";
      void groups[nextGroup].offsetWidth;
      groups[nextGroup].classList.add("slide-from-right");
      groups[currentGroup].classList.add("slide-to-left");

      onAnimationEnd(groups[currentGroup], function () {
        currentGroup = nextGroup;
        initGroups();
        isAnimating = false;
      });
    });
  };

  // [CERT_GRID] - Function to initialize the certifications grid
  const initializeCertificationsGrid = () => {
    const prevArrow = document.querySelector(".certifications .prev-arrow");
    const nextArrow = document.querySelector(".certifications .next-arrow");
    const groups = document.querySelectorAll(".certifications .item-group");

    if (!prevArrow || !nextArrow || groups.length === 0) return;

    let currentGroup = 0;
    const totalGroups = groups.length;
    let isAnimating = false;

    // [CERT_GRID_MOBILE] - Check if in mobile view
    function isMobileView() {
      return window.innerWidth <= 480;
    }

    // [CERT_GRID_INIT] - Initialize group classes based on view
    function initGroups() {
      if (isMobileView()) {
        groups.forEach((group) => {
          group.className = "item-group";
        });
        return;
      }

      groups.forEach((group, index) => {
        group.classList.remove(
          "slide-from-left",
          "slide-to-right",
          "slide-from-right",
          "slide-to-left"
        );
        if (index === currentGroup) {
          group.className = "item-group active";
        } else if (index === (currentGroup + 1) % totalGroups) {
          group.className = "item-group next";
        } else {
          group.className = "item-group prev";
        }
      });
    }

    initGroups();

    // [CERT_GRID_ANIMATION] - Handle animation end events
    function onAnimationEnd(element, callback) {
      if (isMobileView()) {
        callback();
        return;
      }

      const animations = {
        animation: "animationend",
        OAnimation: "oAnimationEnd",
        MozAnimation: "animationend",
        WebkitAnimation: "webkitAnimationEnd",
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

    // [CERT_GRID_PREV] - Previous arrow click handler
    if (prevArrow) {
      prevArrow.addEventListener("click", function () {
        if (isMobileView() || isAnimating) return;

        isAnimating = true;
        const prevGroup = (currentGroup - 1 + totalGroups) % totalGroups;
        groups[prevGroup].className = "item-group prev";
        void groups[prevGroup].offsetWidth;
        groups[prevGroup].classList.add("slide-from-left");
        groups[currentGroup].classList.add("slide-to-right");

        onAnimationEnd(groups[currentGroup], function () {
          currentGroup = prevGroup;
          initGroups();
          isAnimating = false;
        });
      });
    }

    // [CERT_GRID_NEXT] - Next arrow click handler
    if (nextArrow) {
      nextArrow.addEventListener("click", function () {
        if (isMobileView() || isAnimating) return;

        isAnimating = true;
        const nextGroup = (currentGroup + 1) % totalGroups;
        groups[nextGroup].className = "item-group next";
        void groups[nextGroup].offsetWidth;
        groups[nextGroup].classList.add("slide-from-right");
        groups[currentGroup].classList.add("slide-to-left");

        onAnimationEnd(groups[currentGroup], function () {
          currentGroup = nextGroup;
          initGroups();
          isAnimating = false;
        });
      });
    }
  };

  // [MODAL] - Function to initialize the project modal
  const initializeProjectModal = () => {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const modalClose = document.getElementById("modal-close");
    const githubBtn = document.getElementById("github-btn");

    // [MODAL_UTILS] - Tech icon mapping function
    function getTechIconPath(tech) {
      // Map of lowercase tech names to their correct filename cases
      const techMap = {
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        java: "Java",
        cpp: "CPP",
        mysql: "MySQL",
        php: "Php",
        android: "Android",
        kotlin: "Kotlin",
        google: "Google",
        swift: "Swift",
        postgres: "PostgreSQL",
        python: "Python",
        csharp: "CSharp",
        ios: "IOS",
        // Add others as needed
      };

      return `assets/img/icon${
        techMap[tech.toLowerCase()] || capitalizeFirstLetter(tech)
      }.svg`;
    }

    // [MODAL_UTILS] - Utility function to capitalize first letter
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // [MODAL_OPEN] - Function to open project modal
    function openProjectModal(projectId) {
      console.log("Opening modal for project ID:", projectId);
      const project = projectsData.find((p) => p.id === projectId);

      if (!project) {
        console.error("Project not found with ID:", projectId);

        // [MODAL_FALLBACK] - Fallback project data if not found
        const fallbackProject = {
          title: "Project",
          description: "Project description not available.",
          image: "assets/img/imgPortfolio.webp",
          githubUrl: "#",
          technologies: [],
        };

        modalTitle.textContent = fallbackProject.title;
        modalDescription.innerHTML = `<p>${fallbackProject.description}</p>`;
        modalImage.src = fallbackProject.image;
        modalImage.alt = fallbackProject.title;
        githubBtn.setAttribute("data-url", fallbackProject.githubUrl);
      } else {
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = `<p>${project.description}</p>`;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        githubBtn.setAttribute("data-url", project.githubUrl);

        // Remove existing size classes
        modalImage.classList.remove(
          "image-small",
          "image-medium",
          "image-large",
          "playbook-image"
        );

        // Apply size class if specified
        if (project.modalImageSize) {
          modalImage.classList.add(`image-${project.modalImageSize}`);
        }

        // [MODAL_TECH] - Update technology logos
        const techLogos = document.querySelector(".tech-logos");
        if (techLogos) {
          techLogos.innerHTML = "";

          if (project.technologies && project.technologies.length > 0) {
            project.technologies.forEach((tech) => {
              const logoPath = getTechIconPath(tech);
              const logoImg = document.createElement("img");
              logoImg.src = logoPath;
              logoImg.alt = tech;
              logoImg.title = capitalizeFirstLetter(tech);
              logoImg.className = "tech-logo";
              techLogos.appendChild(logoImg);
            });
          }
        }
      }

      modal.classList.add("show");

      // [MODAL_SCROLL] - Scroll modal into view
      setTimeout(() => {
        const modalContent = document.querySelector(".modal-content");
        if (modalContent) {
          const modalRect = modalContent.getBoundingClientRect();
          const scrollToY =
            window.scrollY +
            modalRect.top +
            modalRect.height / 2 -
            window.innerHeight / 2;

          window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
          });
        }
      }, 10);
    }

    // [MODAL_CLOSE] - Function to close project modal
    function closeProjectModal() {
      modal.classList.add("hide");

      setTimeout(() => {
        modal.classList.remove("show");

        setTimeout(() => {
          modalTitle.textContent = "";
          modalDescription.innerHTML = "";
          modalImage.src = "";
          modal.classList.remove("hide");
        }, 50);
      }, 400);
    }

    // [MODAL_ITEMS] - Attach event listeners to project items
    const items = document.querySelectorAll(".projects .item");
    items.forEach((item) => {
      item.addEventListener("click", function () {
        const subtitle = item.querySelector(".item-subtitle");
        if (!subtitle) return;

        const projectTitle = subtitle.textContent.trim();
        console.log("Item clicked:", projectTitle);

        // Look up the project by title first, then fallback to ID generation
        const project = projectsData.find((p) => p.title === projectTitle);
        if (project) {
          openProjectModal(project.id);
        } else {
          // Fallback to generated ID
          const generatedId = projectTitle.toLowerCase().replace(/\s+/g, "");
          console.log("Generated ID:", generatedId);
          openProjectModal(generatedId);
        }
      });
    });

    // [MODAL_GITHUB] - GitHub button click event
    if (githubBtn) {
      githubBtn.addEventListener("click", function () {
        const url = this.getAttribute("data-url");
        if (url && url !== "#") {
          window.open(url, "_blank");
        }
      });
    }

    // [MODAL_CLOSE_BTN] - Modal close button click event
    if (modalClose) {
      modalClose.addEventListener("click", closeProjectModal);
    }

    // [MODAL_OUTSIDE] - Close modal when clicking outside
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeProjectModal();
      }
    });

    // [MODAL_ESC] - Close modal with Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("show")) {
        closeProjectModal();
      }
    });
  };

  // [CERT_MODAL] - Function to initialize the certification modal
  const initializeCertModal = () => {
    const modal = document.getElementById("cert-modal");
    if (!modal) return;

    const modalTitle = document.getElementById("cert-modal-title");
    const modalDescription = document.getElementById("cert-modal-description");
    const modalImage = document.getElementById("cert-modal-image");
    const modalClose = document.getElementById("cert-modal-close");
    const statusBtn = document.getElementById("cert-status-btn");
    const statusIcon = document.getElementById("cert-status-icon");
    const statusText = document.getElementById("cert-status-text");

    // [CERT_MODAL_OPEN] - Function to open certification modal
    function openCertModal(certId) {
      console.log("Opening modal for certification ID:", certId);
      const cert = certificationsData.find((c) => c.id === certId);

      if (!cert) {
        console.error("Certification not found with ID:", certId);

        // [CERT_MODAL_FALLBACK] - Fallback certification data if not found
        const fallbackCert = {
          title: "Certification",
          description: "Certification description not available.",
          image: "assets/img/imgCertDefault.webp",
          status: "in-progress",
          certUrl: "#",
        };

        modalTitle.textContent = fallbackCert.title;
        modalDescription.innerHTML = `<p>${fallbackCert.description}</p>`;
        modalImage.src = fallbackCert.image;
        modalImage.alt = fallbackCert.title;

        // [CERT_MODAL_STATUS] - Configure status icon
        if (fallbackCert.status === "completed") {
          statusIcon.src = "assets/img/iconCheck.svg";
          statusText.innerHTML =
            '<span class="status-completed">Completed</span>';
        } else {
          statusIcon.src = "assets/img/iconTime.svg";
          statusText.innerHTML =
            '<span class="status-in-progress">In Progress</span>';
        }

        statusBtn.setAttribute("data-url", fallbackCert.certUrl);
      } else {
        modalTitle.textContent = cert.title;
        modalDescription.innerHTML = `<p>${cert.description}</p>`;
        modalImage.src = cert.image;
        modalImage.alt = cert.title;

        // [CERT_MODAL_STATUS] - Configure status icon
        if (cert.status === "completed") {
          statusIcon.src = "assets/img/iconCheck.svg";
          statusText.innerHTML =
            '<span class="status-completed">Completed</span>';
        } else {
          statusIcon.src = "assets/img/iconTime.svg";
          statusText.innerHTML =
            '<span class="status-in-progress">In Progress</span>';
        }

        statusBtn.setAttribute("data-url", cert.certUrl);
      }

      modal.classList.add("show");

      // [CERT_MODAL_SCROLL] - Scroll modal into view
      setTimeout(() => {
        const modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
          const modalRect = modalContent.getBoundingClientRect();
          const scrollToY =
            window.scrollY +
            modalRect.top +
            modalRect.height / 2 -
            window.innerHeight / 2;

          window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
          });
        }
      }, 10);
    }

    // [CERT_MODAL_CLOSE] - Function to close certification modal
    function closeCertModal() {
      modal.classList.add("hide");

      setTimeout(() => {
        modal.classList.remove("show");

        setTimeout(() => {
          modalTitle.textContent = "";
          modalDescription.innerHTML = "";
          modalImage.src = "";
          modal.classList.remove("hide");
        }, 50);
      }, 400);
    }

    // [CERT_MODAL_ITEMS] - Attach event listeners to certification items
    const items = document.querySelectorAll(".certifications .item");
    items.forEach((item) => {
      item.addEventListener("click", function () {
        const subtitle = item.querySelector(".item-subtitle");
        if (!subtitle) return;

        const certTitle = subtitle.textContent.trim();
        console.log("Certification item clicked:", certTitle);

        // Look up the certification by title first, then fallback to ID generation
        const cert = certificationsData.find((c) => c.title === certTitle);
        if (cert) {
          openCertModal(cert.id);
        } else {
          // Fallback to generated ID
          const generatedId = certTitle.toLowerCase().replace(/\s+/g, "");
          console.log("Generated ID:", generatedId);
          openCertModal(generatedId);
        }
      });
    });

    // [CERT_MODAL_STATUS_BTN] - Status button click event
    if (statusBtn) {
      statusBtn.addEventListener("click", function () {
        const url = this.getAttribute("data-url");
        if (url && url !== "#") {
          window.open(url, "_blank");
        }
      });
    }

    // [CERT_MODAL_CLOSE_BTN] - Modal close button click event
    if (modalClose) {
      modalClose.addEventListener("click", closeCertModal);
    }

    // [CERT_MODAL_OUTSIDE] - Close modal when clicking outside
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeCertModal();
      }
    });

    // [CERT_MODAL_ESC] - Close modal with Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("show")) {
        closeCertModal();
      }
    });
  };

  // [FORM_INIT] - Initialize contact form functionality
  const initializeContactForm = () => {
    // [INIT] - Variable to control if form is being submitted
    let isSubmitting = false;

    // [FORM_DATA] - Function to check if form has data
    function hasFormData() {
      const form = document.getElementById("contactForm");
      if (!form) return false;

      const name = document.getElementById("name")?.value;
      const email = document.getElementById("email")?.value;
      const subject = document.getElementById("subject")?.value;
      const message = document.getElementById("message")?.value;
      return name || email || subject || message;
    }

    // [SUBMISSION] - Capture form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submission to handle it ourselves

        const overlay = document.getElementById("formOverlay");
        const form = this;

        // [INIT] - Mark that we are submitting the form
        isSubmitting = true;

        // [UI] - Show overlay
        overlay.classList.add("active");

        // [SECURITY] - Disable all form fields during submission
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach((input) => {
          input.disabled = true;
        });

        // [FORM_DATA] - Create a virtual form to send data
        const formData = new FormData();

        // [FORM_DATA] - Add all form fields
        formData.append("name", document.getElementById("name").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("subject", document.getElementById("subject").value);
        formData.append("message", document.getElementById("message").value);

        // [FORM_DATA] - Add specific fields for FormSubmit
        formData.append("_captcha", "false");
        formData.append("_next", "false");
        formData.append("_template", "table"); // To display data in table format

        // [SUBMISSION] - FormSubmit URL
        const formAction = form.getAttribute("action");

        // [SUBMISSION] - Send data using fetch API
        fetch(formAction, {
          method: "POST",
          body: formData,
          // Don't set Content-Type, let fetch determine it automatically with the correct boundary
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Server response error");
            }
            return response.text();
          })
          .then((data) => {
            // [UI] - Success - wait 2 seconds to show the message
            setTimeout(() => {
              // [UI] - Change message in the overlay
              const messageEl = document.querySelector(".message");
              messageEl.textContent = "Message sent successfully!";

              // [UI] - Change loader animation to show a check
              const loader = document.querySelector(".loader");

              // Remove the loader class and add a success class
              loader.classList.remove("loader");
              loader.classList.add("loader-success");

              // [UI] - Remove overlay after a delay
              setTimeout(() => {
                overlay.classList.remove("active");
                form.reset();

                // [SECURITY] - Re-enable form fields
                inputs.forEach((input) => {
                  input.disabled = false;
                });

                // [UI] - Reset loader to original state
                loader.classList.remove("loader-success");
                loader.classList.add("loader");

                // [UI] - Reset message
                messageEl.textContent = "Sending message, please wait...";

                // [INIT] - Reset submission state
                isSubmitting = false;
              }, 1500);
            }, 1000);
          })
          .catch((error) => {
            console.error("Error sending message:", error);

            // [UI] - In case of error
            const messageEl = document.querySelector(".message");
            messageEl.textContent = "Error sending message. Please try again.";

            // [UI] - Change loader animation to show an error
            const loader = document.querySelector(".loader");
            loader.style.animation = "none";
            loader.innerHTML = "✗";
            loader.style.fontSize = "3rem";
            loader.style.color = "#FF5252";

            // [UI] - Wait 2 seconds and then close the overlay
            setTimeout(() => {
              overlay.classList.remove("active");

              // [SECURITY] - Re-enable form fields
              inputs.forEach((input) => {
                input.disabled = false;
              });

              // [UI] - Reset loader to original state
              loader.innerHTML = "";
              loader.style.fontSize = "";
              loader.style.color = "";
              loader.style.animation = "loader 1.2s infinite";

              // [UI] - Reset message
              messageEl.textContent = "Sending message, please wait...";

              // [INIT] - Reset submission state
              isSubmitting = false;
            }, 2000);
          });
      });
    }
  };

  // [SECTIONS] - HTML content for each section
  const contentSections = {
    // [SECTION_ABOUT] - About Me section HTML
    aboutMe: /*html*/ `
            <div class="main__content__container"> 
                <div class="content__container">
                    <h2 class="content__subtitle">About Me</h2>
                        <p class="content__text">
                            Hi, I'm a software developer with a strong foundation in design and programming.
                            Passionate about solving complex problems with attention to detail. Committed to continuous learning
                            and staying updated with industry trends. Strong collaborator with excellent communication skills.
                        </p>
                </div>
                <div class="img__container">
                    <img src="assets/img/photo.webp" alt="Profile Picture">
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
    // [SECTION_EXPERIENCE] - Experience section HTML
    experience: /*html*/ `
            <h2 class="section__title">Experience</h2>
            <div class="main__content__container column start">
                <div class="content__container__experience">
                    <img class="content__img" src="assets/img/logoTeleperformance.webp" alt="caritasWebsite">
                    <h2 class="content__subtitle__experience">Retention Agent at Tele-Performance</h2>
                    <h3 class="content__subtitle__experience no-shadow">May 2023 - July 2023</h3>
                    <p class="content__text experience-text no-shadow">
                        At Tele-Performance, I worked as a Retention Agent focused on maintaining the company's client base. I analyzed customer situations to understand their concerns about leaving the company and used effective communication skills to engage with them. By applying problem-solving and negotiation techniques, I created tailored offers that addressed their specific needs, contributing directly to successful client retention.                    </p>
                </div>
                <div class="content__container__experience">
                    <img class="content__img" src="assets/img/caritasImage.webp" alt="caritasWebsite">
                    <h2 class="content__subtitle__experience">Web Developer at Cáritas de Guadalajara</h2>
                    <h3 class="content__subtitle__experience no-shadow">Aug 2023 - May 2024</h3>
                    <p class="content__text experience-text no-shadow">
                        As a Web Developer at Cáritas de Guadalajara, I collaborated on developing a new interactive website that effectively communicated the organization's mission to all ages. Using Visual Studio, I implemented HTML for structure, CSS for styling, and JavaScript for interactive features. This project allowed me to apply my technical skills in a meaningful social context while strengthening my web development capabilities.
                    </p>
                </div>
            </div>
        `,
    // [SECTION_PROJECTS] - Projects section HTML
    projects: /*html*/ `
            <h2 class="section__title">Projects</h2>
            <div class="main__content__container">
                <div class="grid__wrapper">
                    <img src="assets/img/leftArrow.svg" class="prev-arrow" alt="prev-arrow">
                    <div class="grid__container">
                        <div class="item-group active" id="group-1">
                            <div class="item">
                                <img class="item-img" src="assets/img/imgPortfolio.webp" alt="imgPortfolio">
                                <h2 class="item-subtitle">MyDevPort</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgGoogleMaps.webp" alt="imgGmaps">
                                <h2 class="item-subtitle">GmapsAPI App</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgPokemon.webp" alt="imgPokemon">
                                <h2 class="item-subtitle">Pokemon BA</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgInvestigators.webp" alt="imgInvestigators">
                                <h2 class="item-subtitle">InvestiApp</h2>
                            </div>
                            <div class="item">
                                <div class = "flexrow">
                                    <img class="item-img" src="assets/img/imgPlaybook.webp" alt="imgPlaybook">
                                    <img class="item-img" src="assets/img/imgPlaybook2.webp" alt="imgPlaybook">
                                </div>
                                <h2 class="item-subtitle">PlayBook</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgNotes.webp" alt="imgNotes">
                                <h2 class="item-subtitle">Notes App</h2>
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
    // [SECTION_CERTIFICATIONS] - Certifications section HTML
    certifications: /*html*/ `
            <h2 class="section__title small">Certifications</h2>
            <div class="main__content__container">
                <div class="grid__wrapper">
                    <img src="assets/img/leftArrow.svg" class="prev-arrow" alt="prev-arrow">
                    <div class="grid__container">
                        <div class="item-group active" id="cert-group-1">
                            <div class="item">
                                <img class="item-img" src="assets/img/imgTecmilenio.webp" alt="Devops">
                                <h2 class="item-subtitle">DevOps</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgTecmilenio.webp" alt="App Development">
                                <h2 class="item-subtitle">App Development</h2>
                            </div>
                            <div class="item">
                                <img class="item-img" src="assets/img/imgTecmilenio.webp" alt="Big Data">
                                <h2 class="item-subtitle">Big Data</h2>
                            </div>
                        </div>
                    </div>
                    <img src="assets/img/rightArrow.svg" class="next-arrow" alt="next-arrow">
                </div>
            </div>
            <div class="project-modal" id="cert-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="cert-status-btn" id="cert-status-btn">
                            <img src="" alt="Status" id="cert-status-icon">
                        </div>
                        <h2 class="modal-title" id="cert-modal-title">Título del Certificado</h2>
                        <div class="close-btn" id="cert-modal-close">
                            <img src="assets/img/iconClose.svg" alt="Cerrar">
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="project-image">
                            <img src="" alt="Imagen del certificado" id="cert-modal-image">
                        </div>
                        <div class="project-description" id="cert-modal-description">
                            <p>Descripción del certificado...</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <h3 class="footer-title">Certification Status</h3>
                        <div class="cert-status" id="cert-status-text"></div>
                    </div>
                </div>
            </div>
        `,
    // [SECTION_CONTACT] - Contact section HTML
    contact: /*html*/ `
            <div class="main__content__container">
                <h2 class="contact__title">Contact Me</h2>
                <div class="contact__container">
                    <div class="overlay" id="formOverlay">
                        <div class="loader-container">
                            <div class="loader"></div>
                            <div class="message">Sending message, please wait...</div>
                        </div>
                    </div>
                    <form class="forms" action="https://formsubmit.co/f06e0b701a319e4512efeafc5e4103e0" method="POST" id="contactForm">
                        <div class="input-group">
                            <label for="name">Name</label>
                            <input name="name" id="name" type="text" placeholder="Sheldon Cooper" required>
                        </div>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input name="email" id="email" type="email" placeholder="bazinga@caltech.edu" required>
                        </div>
                        <div class="input-group">
                            <label for="subject">Subject</label>
                            <input name="subject" id="subject" type="text" placeholder="Fun with Flags" required>
                        </div>
                        <div class="input-group">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" placeholder="I'm not crazy. My mother had me tested." required></textarea>
                        </div>
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_next" value="false">
                        <input type="hidden" name="_template" value="table">
                        <input type="submit" class="send-button" value="Send">
                    </form>
                </div>
            </div>
        `,
  };

  // [NAV_ACTIVE] - Function to set active navigation link
  const setActiveLink = (clickedLink) => {
    navLinks.forEach((link) => {
      link.classList.remove("pressed");
    });
    clickedLink.classList.add("pressed");
  };

  // [CONTENT_LOAD] - Function to load content with fade transition
  const loadContent = async (sectionId) => {
    mainContent.classList.add("fade-out");

    await new Promise((resolve) => setTimeout(resolve, 300));

    mainContent.innerHTML = contentSections[sectionId];

    // Add appropriate classes to sections for targeting in CSS and JS
    if (sectionId === "projects") {
      const gridWrapper = document.querySelector(".grid__wrapper");
      if (gridWrapper) {
        gridWrapper.parentElement.classList.add("projects");
      }
    } else if (sectionId === "certifications") {
      const gridWrapper = document.querySelector(".grid__wrapper");
      if (gridWrapper) {
        gridWrapper.parentElement.classList.add("certifications");
      }
    }

    // Initialize specific components for each section
    if (sectionId === "aboutMe") {
      attachCardListeners();
    } else if (sectionId === "projects") {
      initializeProjectGrid();
      initializeProjectModal();
    } else if (sectionId === "certifications") {
      initializeCertificationsGrid();
      initializeCertModal();
    } else if (sectionId === "contact") {
      // [FORM_INIT] - Initialize contact form functionality when contact section is loaded
      initializeContactForm();
    }

    mainContent.classList.remove("fade-out");
  };

  // [INIT_PAGE] - Set initial active link and load default content
  const aboutMeLink = document.getElementById("aboutMe");
  setActiveLink(aboutMeLink);
  loadContent("aboutMe");

  // [NAV_EVENTS] - Navigation link click events
  navLinks.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      checkbox.checked = false;
      setActiveLink(e.target);
      await loadContent(e.target.id);
    });
  });

  // [QUICK_LINKS_EVENTS] - Quick links click events
  quickLinks.forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      const sectionId = e.target.getAttribute("href").substring(1);
      await loadContent(sectionId);
      mainSection.scrollIntoView({ behavior: "smooth" });
      const navLink = document.getElementById(sectionId);
      setActiveLink(navLink);
    });
  });

  // [RESIZE] - Window resize event for skill cards
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1035) {
      document.querySelectorAll(".skill__card-inner").forEach((cardInner) => {
        cardInner.classList.remove("is-flipped");
      });
    }
  });

  // [SCROLL_ARROW] - Initialize scroll arrow animation
  const initializeScrollArrow = () => {
    // Reference to the scroll-arrow element
    const scrollArrow = document.querySelector(".scroll-arrow");
    if (!scrollArrow) return;

    let hasScrolled = false; // Variable to track if user has scrolled

    // Function for the fadeIn animation
    setTimeout(() => {
      scrollArrow.style.animation = "fadeInFromBottom 1s ease-out forwards";
      scrollArrow.classList.add("visible"); // Add a class to indicate the element is visible
    }, 5000); // 5 seconds delay

    // Function to handle scroll event
    function handleScroll() {
      // If the user has scrolled and the element is visible, hide it
      if (
        window.scrollY > 10 &&
        !hasScrolled &&
        scrollArrow.classList.contains("visible")
      ) {
        scrollArrow.style.animation = "fadeOutToBottom 0.5s ease-out forwards";
        hasScrolled = true; // Mark that scrolling has occurred
        scrollArrow.classList.remove("visible");
      }
    }

    // Add listener for the scroll event
    window.addEventListener("scroll", handleScroll);
  };

  initializeScrollArrow();
});
