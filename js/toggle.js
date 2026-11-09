document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial configuration setup
    const bodyElement = document.body;
    const toggleRadios = document.querySelectorAll('input[name="notation-view"]');

    // Establish default fallback state matching the checked layout configuration
    bodyElement.setAttribute("data-notation", "classical");

    // 2. Action listener tracking system focus changes
    toggleRadios.forEach(radio => {
        radio.addEventListener("change", (event) => {
            const selectedValue = event.target.value;
            // Update the body attribute which instantly cascades down your CSS matrix
            bodyElement.setAttribute("data-notation", selectedValue);
        });
    });
});