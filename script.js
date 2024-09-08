// Grab the button and the skills section from the DOM
var toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
var skillsSection = document.getElementById("skillsSection");
// Initialize a variable to track visibility of the skills section
var isSkillsVisible = true;
// Event listener for the toggle button
toggleSkillsBtn.addEventListener("click", function () {
    isSkillsVisible = !isSkillsVisible;
    // Show or hide the skills section based on the state
    if (isSkillsVisible) {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills Section";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills Section";
    }
});
