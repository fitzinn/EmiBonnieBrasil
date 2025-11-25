// theme.js
function initThemeSwitcher() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return; // button não existe, sai

    // Aplica o tema salvo
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeBtn.textContent = currentTheme === "dark" ? "🌙 Dark" : "☀️ Light";

    // Remove listener antigo e adiciona um só
    themeBtn.replaceWith(themeBtn.cloneNode(true)); // limpa listeners antigos
    const newBtn = document.getElementById("themeToggle");

    newBtn.addEventListener("click", () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const newTheme = isDark ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        newBtn.textContent = newTheme === "dark" ? "🌙 Dark" : "☀️ Light";
    });
}

// Inicializa uma vez no load do index.html
window.addEventListener("load", initThemeSwitcher);