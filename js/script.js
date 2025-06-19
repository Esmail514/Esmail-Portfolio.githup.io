// Set current year in footer
      document.getElementById("year").textContent = new Date().getFullYear();

      // Mobile menu toggle
      const menuToggle = document.getElementById("menuToggle");
      const nav = document.getElementById("nav");

      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
      });

      // Close menu when clicking a link
      const navLinks = document.querySelectorAll("nav a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
        });
      });

      // Form submission
      const contactForm = document.getElementById("contactForm");
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Form validation would go here
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Animation on scroll
      const fadeElements = document.querySelectorAll(".fade-in");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      fadeElements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(element);
      });