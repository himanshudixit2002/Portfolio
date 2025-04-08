// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear()

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Dark mode toggle based on system preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

// Set initial theme
setTheme(prefersDarkScheme.matches)

// Listen for changes in system preference
prefersDarkScheme.addEventListener("change", (e) => {
  setTheme(e.matches)
})

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".project-card, .experience-card, .certification-card")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.2

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Set initial styles for animation
document.querySelectorAll(".project-card, .experience-card, .certification-card").forEach((element) => {
  element.style.opacity = "0"
  element.style.transform = "translateY(20px)"
  element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
})

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll)
window.addEventListener("load", animateOnScroll)

// Form submission handling
const contactForm = document.querySelector("form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const submitButton = this.querySelector('button[type="submit"]')
    submitButton.textContent = "Sending..."
    submitButton.disabled = true

    // Form will be handled by Formspree
    // This is just for UI feedback
    setTimeout(() => {
      submitButton.textContent = "Send Message"
      submitButton.disabled = false
    }, 2000)
  })
}
