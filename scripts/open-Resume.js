const resume = document.getElementById("resume");
const btnResume = document.getElementById("btn-resume");

resume.style.display = "none";

btnResume.addEventListener("click", function () {
    window.open("documents/Lucas'Resume.pdf", "_blank");    
});