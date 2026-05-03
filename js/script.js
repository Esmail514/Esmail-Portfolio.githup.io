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

// Notification System
const notificationContainer = document.getElementById("notificationContainer");

const showNotification = (message, type = "success") => {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  
  const icon = type === "success" ? "fa-check-circle" : "fa-exclamation-circle";
  
  notification.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;
  
  notificationContainer.appendChild(notification);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 5000);
};

// Form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  // Change button state
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showNotification("Thank you for your message! I will get back to you soon.", "success");
      contactForm.reset();
    } else {
      const data = await response.json();
      if (Object.hasOwn(data, 'errors')) {
        showNotification(data["errors"].map(error => error["message"]).join(", "), "error");
      } else {
        showNotification("Oops! There was a problem submitting your form. Note: This form requires a web server to function.", "error");
      }
    }
  } catch (error) {
    showNotification("Oops! There was a problem submitting your form. Note: This form requires a web server to function.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
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

// Project Modal Functionality
const projectCards = document.querySelectorAll('.project');
const previewBtns = document.querySelectorAll('.preview-project');
const projectModals = document.querySelectorAll('.project-modal');
const modalOverlays = document.querySelectorAll('.modal-overlay');
const modalCloses = document.querySelectorAll('.modal-close');

// Open modal
const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const modalContainer = modal.querySelector('.modal-container');
    modalContainer.style.animation = 'modalSlideIn 0.4s ease';
  }
};

// Close all modals
const closeAllModals = () => {
  projectModals.forEach(modal => {
    modal.style.display = 'none';
  });
  document.body.style.overflow = 'auto';
};

// Event listeners for preview buttons
previewBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = btn.getAttribute('data-modal-target');
    if (modalId) {
      openModal(modalId);
    }
  });
});

// Event listeners for project cards (clicking anywhere on card opens modal, unless linking out)
projectCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.project-links')) {
      const previewBtn = card.querySelector('.preview-project');
      if (previewBtn) {
        const modalId = previewBtn.getAttribute('data-modal-target');
        if (modalId) {
          openModal(modalId);
        }
      }
    }
  });
});

// Close modal when clicking overlay or close button
modalOverlays.forEach(overlay => {
  overlay.addEventListener('click', closeAllModals);
});

modalCloses.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeAllModals);
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});