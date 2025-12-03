// Simple welcome message when the page loads
window.onload = function () {
    console.log("Cloud Comparison Portal Loaded Successfully!");
};

// Toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;

    // Add or remove dark mode class
    body.classList.toggle("dark-mode");

    // Save user preference in browser
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme on refresh
(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
})();
