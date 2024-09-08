// Grab the button and the skills section from the DOM
const toggleSkillsBtn = document.getElementById(
  "toggleSkillsBtn"
) as HTMLButtonElement;
const skillsSection = document.getElementById("skillsSection") as HTMLElement;

// Initialize a variable to track visibility of the skills section
let isSkillsVisible = true;

// Event listener for the toggle button
toggleSkillsBtn.addEventListener("click", () => {
  isSkillsVisible = !isSkillsVisible;

  // Show or hide the skills section based on the state
  if (isSkillsVisible) {
    skillsSection.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills Section";
  } else {
    skillsSection.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills Section";
  }
});
