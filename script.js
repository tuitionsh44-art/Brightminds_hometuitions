const TUTOR_GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeMRrjNmMOgZpkrVKqACR98h6r-x4RQ3x2ZuUcasFQ420M8gQ/viewform";

function openTutorApplication() {
    if (TUTOR_GOOGLE_FORM_URL) {
        window.open(TUTOR_GOOGLE_FORM_URL, "_blank");
    } else {
        window.location.href = "tutor-application.html";
    }
}

function toggleMenu() {
    document.querySelector(".navlinks")?.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navlinks a").forEach((a) => {
        a.addEventListener("click", () => {
            document.querySelector(".navlinks")?.classList.remove("open");
        });
    });
});
