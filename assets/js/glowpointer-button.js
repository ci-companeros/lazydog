const generateGlowButtons = () => {
  document.querySelectorAll(".glow-button").forEach((button) => {
    let gradientElem = button.querySelector(".gradient");

    if (!gradientElem) {
      gradientElem = document.createElement("div");
      gradientElem.classList.add("gradient");

      button.appendChild(gradientElem);
    }

    button.addEventListener("pointermove", (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button)
              .getPropertyValue("--button-glow-start")
              .trim(),
            getComputedStyle(button)
              .getPropertyValue("--button-glow-end")
              .trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });
    });
  });
};

// Set variables on loaded
document.addEventListener("DOMContentLoaded", generateGlowButtons);

// Set variables on resize
window.addEventListener("resize", generateGlowButtons);
