// =======================================
// Main JavaScript File
// =======================================

// DOMContentLoaded - Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    // Initialize all necessary functions
    initNavbar();
    initScrollToTop();
    initDarkModeToggle();
  });
  
  // =======================================
  // Navbar Functionality
  // =======================================
  
  // Toggle Mobile Navbar
  function initNavbar() {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-mobile");
  
    if (navbarToggle && navbarMenu) {
      navbarToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
      });
  
      // Close the menu when a link is clicked
      document.querySelectorAll(".navbar-mobile a").forEach((link) => {
        link.addEventListener("click", () => {
          navbarMenu.classList.remove("active");
        });
      });
    }
  }
  
  // =======================================
  // Scroll to Top Button
  // =======================================
  
  function initScrollToTop() {
    const scrollToTopBtn = document.querySelector("#scrollToTop");
  
    if (scrollToTopBtn) {
      window.addEventListener("scroll", () => {
        // Show button after scrolling down 300px
        if (window.scrollY > 300) {
          scrollToTopBtn.classList.add("visible");
        } else {
          scrollToTopBtn.classList.remove("visible");
        }
      });
  
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }
  
  // =======================================
  // Dark Mode Toggle
  // =======================================
  
  function initDarkModeToggle() {
    const darkModeToggle = document.querySelector("#darkModeToggle");
  
    if (darkModeToggle) {
      // Check user preference and apply
      const isDarkMode = localStorage.getItem("darkMode") === "enabled";
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
      }
  
      darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
  
        // Save user preference
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
        } else {
          localStorage.setItem("darkMode", "disabled");
        }
      });
    }
  }
  
  // =======================================
  // Utility Functions
  // =======================================
  
  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
  // =======================================
// Dynamic Content Loading
// =======================================

// Dynamically update the portfolio projects section
function loadPortfolioProjects() {
    const projects = [
      {
        title: "E-Commerce Website",
        description: "A fully responsive online shopping platform.",
        image: "images/project1.jpg",
        link: "#",
      },
      {
        title: "Personal Blog",
        description: "A modern and clean blog for content creators.",
        image: "images/project2.jpg",
        link: "#",
      },
      {
        title: "Portfolio Website",
        description: "Showcase of professional skills and achievements.",
        image: "images/project3.jpg",
        link: "#",
      },
    ];
  
    const portfolioContainer = document.querySelector("#portfolio-container");
  
    if (portfolioContainer) {
      projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.className = "portfolio-item";
        projectElement.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="portfolio-image">
          <div class="portfolio-details">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="btn">View Project</a>
          </div>
        `;
        portfolioContainer.appendChild(projectElement);
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadPortfolioProjects);
  
  // =======================================
  // Contact Form Validation
  // =======================================
  
  function initContactForm() {
    const form = document.querySelector("#contact-form");
  
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();
        const errorMessage = document.querySelector("#form-error");
  
        if (!name || !email || !message) {
          errorMessage.textContent = "Please fill out all fields.";
          errorMessage.classList.add("visible");
          return;
        }
  
        if (!validateEmail(email)) {
          errorMessage.textContent = "Please enter a valid email address.";
          errorMessage.classList.add("visible");
          return;
        }
  
        errorMessage.classList.remove("visible");
        console.log("Form submitted:", { name, email, message });
  
        // Reset the form
        form.reset();
  
        // Show success message
        const successMessage = document.querySelector("#form-success");
        if (successMessage) {
          successMessage.textContent = "Your message has been sent!";
          successMessage.classList.add("visible");
  
          setTimeout(() => {
            successMessage.classList.remove("visible");
          }, 3000);
        }
      });
    }
  }
  
  // Email validation helper
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  document.addEventListener("DOMContentLoaded", initContactForm);
  
  // =======================================
  // Modal Functionality
  // =======================================
  
  function initModal() {
    const modal = document.querySelector("#modal");
    const openModalBtn = document.querySelector("#openModal");
    const closeModalBtn = document.querySelector("#closeModal");
  
    if (modal && openModalBtn && closeModalBtn) {
      openModalBtn.addEventListener("click", () => {
        modal.classList.add("visible");
      });
  
      closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("visible");
      });
  
      // Close modal when clicking outside of it
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("visible");
        }
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", initModal);
  // =======================================
// Theme Toggle (Light/Dark Mode)
// =======================================

function initThemeToggle() {
    const themeToggle = document.querySelector("#theme-toggle");
    const body = document.body;
  
    // Check local storage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
    }
  
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
          body.classList.remove("dark-theme");
          body.classList.add("light-theme");
          localStorage.setItem("theme", "light-theme");
        } else {
          body.classList.remove("light-theme");
          body.classList.add("dark-theme");
          localStorage.setItem("theme", "dark-theme");
        }
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", initThemeToggle);
  
  // =======================================
  // Scroll to Top Button
  // =======================================
  
  function initScrollToTop() {
    const scrollToTopBtn = document.querySelector("#scroll-to-top");
  
    if (scrollToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          scrollToTopBtn.classList.add("visible");
        } else {
          scrollToTopBtn.classList.remove("visible");
        }
      });
  
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", initScrollToTop);
  
  // =======================================
  // Smooth Scrolling for Navigation
  // =======================================
  
  function initSmoothScroll() {
    const links = document.querySelectorAll("a[href^='#']");
  
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
  
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", initSmoothScroll);
  
  // =======================================
  // Lazy Loading Images
  // =======================================
  
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll("img.lazy");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px" }
    );
  
    lazyImages.forEach((img) => {
      observer.observe(img);
    });
  }
  
  document.addEventListener("DOMContentLoaded", initLazyLoading);
  
  // =======================================
  // Final Initialization
  // =======================================
  
  // Combine all initializations
  function initializeSite() {
    initThemeToggle();
    initScrollToTop();
    initSmoothScroll();
    initLazyLoading();
  }
  
  document.addEventListener("DOMContentLoaded", initializeSite);
  // Tarjima ma'lumotlari
const translations = {
    uzbek: {
        welcome: "Xush kelibsiz",
        about: "Biz haqimizda",
        services: "Xizmatlarimiz",
        contact: "Bog'lanish",
        portfolio: "Portfolio",
        language: "Tilni tanlang"
    },
    english: {
        welcome: "Welcome",
        about: "About Us",
        services: "Our Services",
        contact: "Contact",
        portfolio: "Portfolio",
        language: "Select Language"
    },
    russian: {
        welcome: "Добро пожаловать",
        about: "О нас",
        services: "Наши услуги",
        contact: "Контакты",
        portfolio: "Портфолио",
        language: "Выберите язык"
    }
};

// Foydalanuvchi tanlagan tilni saqlash uchun localStorage
const defaultLang = localStorage.getItem("lang") || "uzbek";

// DOM elementlarini tarjima qilish funksiyasi
function translatePage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Tilni o'zgartirish funksiyasi
function changeLanguage(language) {
    if (translations[language]) {
        localStorage.setItem("lang", language);
        translatePage(language);
    }
}

// Sahifa yuklanganda oldindan tanlangan tilni qo‘llash
document.addEventListener("DOMContentLoaded", () => {
    translatePage(defaultLang);

    // Dropdown til tanlash interfeysini sozlash
    const languageSelector = document.getElementById("languageSelector");
    if (languageSelector) {
        languageSelector.value = defaultLang;
        languageSelector.addEventListener("change", (event) => {
            changeLanguage(event.target.value);
        });
    }
});
// Qo‘shimcha elementlarni dinamik tarjima qilish funksiyasi
function translateDynamicContent(language) {
    // Dinamik qo'shilgan elementlarni topamiz
    const dynamicElements = document.querySelectorAll("[data-dynamic-translate]");
    dynamicElements.forEach((element) => {
        const key = element.getAttribute("data-dynamic-translate");
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Har bir til uchun bayroqcha tugmalarni sozlash
function setupLanguageButtons() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLang = button.getAttribute("data-lang");
            changeLanguage(selectedLang);
        });
    });
}

// Tarjima holatini kuzatish uchun kuzatuvchi
function observeMutations(language) {
    const observer = new MutationObserver(() => {
        translateDynamicContent(language);
    });

    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

// Sahifani yangilamasdan matnlarni o'zgartirish funksiyasi
function updateSingleElementText(elementId, language, key) {
    const element = document.getElementById(elementId);
    if (element && translations[language][key]) {
        element.textContent = translations[language][key];
    }
}

// Foydalanuvchi tanlagan tilga ko‘ra har xil elementlarni ko‘rsatish
function toggleLanguageSpecificContent(language) {
    const allLangContents = document.querySelectorAll("[data-lang-content]");
    allLangContents.forEach((element) => {
        const contentLang = element.getAttribute("data-lang-content");
        if (contentLang === language) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

// Sahifa yangilanganda tilga mos elementlarni yangilash
document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "uzbek";
    toggleLanguageSpecificContent(lang);
    observeMutations(lang);
});

// Turli til variantlarini HTML ga qo‘shish (dinamik interfeys uchun)
function addLanguageOptions() {
    const selector = document.getElementById("languageSelector");
    if (selector) {
        selector.innerHTML = `
            <option value="uzbek" ${defaultLang === "uzbek" ? "selected" : ""}>O'zbek</option>
            <option value="english" ${defaultLang === "english" ? "selected" : ""}>English</option>
            <option value="russian" ${defaultLang === "russian" ? "selected" : ""}>Русский</option>
        `;
    }
}

// Tilni sozlash tugmachalari uchun hodisalarni sozlash
document.addEventListener("DOMContentLoaded", () => {
    addLanguageOptions();
    setupLanguageButtons();
});
