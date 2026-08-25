const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-bs-theme", "dark");

    if (themeIcon) {
        themeIcon.classList.remove("bi-moon-fill");
        themeIcon.classList.add("bi-sun-fill");
    }
}


// Toggle theme
if (themeButton) {

    themeButton.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-bs-theme");

        if (currentTheme === "dark") {

            // Light Mode
            document.documentElement.setAttribute(
                "data-bs-theme",
                "light"
            );

            localStorage.setItem("theme", "light");

            themeIcon.classList.remove("bi-sun-fill");
            themeIcon.classList.add("bi-moon-fill");

        } else {

            // Dark Mode
            document.documentElement.setAttribute(
                "data-bs-theme",
                "dark"
            );

            localStorage.setItem("theme", "dark");

            themeIcon.classList.remove("bi-moon-fill");
            themeIcon.classList.add("bi-sun-fill");
        }

    });

}