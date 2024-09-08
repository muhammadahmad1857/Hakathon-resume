document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect input values from form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    ).value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    ).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)
      .value;
    const profilePicture = (
      document.getElementById("profile-picture") as HTMLInputElement
    ).files?.[0];

    // Initialize resume HTML structure
    let resumeHtml = `
      <h2>Generated Resume</h2>
  `;

    // If a profile picture is selected, read and display it
    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // Add profile picture to resume at the top-right corner with rounded styling
        const imageHtml = `
              <img src="${e.target?.result}" alt="Profile Picture"
              style="max-width: 150px; float: right; border-radius: 50%; margin-left: 20px;" />
          `;

        // Add the image to the resume before the content
        resumeHtml = imageHtml + resumeHtml;

        // Resume content to display the collected information
        resumeHtml += `
              <p><strong>Name:</strong> <span id="editableName">${name}</span></p>
              <p><strong>Email:</strong> <span id="editableEmail">${email}</span></p>
              <p><strong>Phone:</strong> <span id="editablePhone">${phone}</span></p>
              <p><strong>Education:</strong> <span id="editableEducation">${education}</span></p>
              <p><strong>Experience:</strong> <span id="editableExperience">${experience}</span></p>
              <p><strong>Skills:</strong> <span id="editableSkills">${skills}</span></p>
              <button type="button" id="editResumeButton">Edit</button>
          `;

        // Display the final generated resume with the image
        (document.getElementById("resumeOutput") as HTMLElement).innerHTML =
          resumeHtml;

        // Attach the "Edit" functionality after resume is rendered
        setupEditButton();
      };
      reader.readAsDataURL(profilePicture); // Convert the image file to a Data URL for display
    } else {
      // If no image is selected, display resume without profile picture
      resumeHtml += `
          <p><strong>Name:</strong> <span id="editableName">${name}</span></p>
          <p><strong>Email:</strong> <span id="editableEmail">${email}</span></p>
          <p><strong>Phone:</strong> <span id="editablePhone">${phone}</span></p>
          <p><strong>Education:</strong> <span id="editableEducation">${education}</span></p>
          <p><strong>Experience:</strong> <span id="editableExperience">${experience}</span></p>
          <p><strong>Skills:</strong> <span id="editableSkills">${skills}</span></p>
          <button type="button" id="editResumeButton">Edit</button>
      `;

      // Display the resume without the image
      (document.getElementById("resumeOutput") as HTMLElement).innerHTML =
        resumeHtml;

      // Attach the "Edit" functionality after resume is rendered
      setupEditButton();
    }
  });

// Function to enable/disable editing for the entire resume
function setupEditButton() {
  const editButton = document.getElementById("editResumeButton") as HTMLElement;
  const editableSections = [
    "editableName",
    "editableEmail",
    "editablePhone",
    "editableEducation",
    "editableExperience",
    "editableSkills",
  ];

  editButton.addEventListener("click", function () {
    // Check if currently in edit mode
    const isEditMode = editButton.textContent === "Save";

    editableSections.forEach((sectionId) => {
      const section = document.getElementById(sectionId) as HTMLElement;
      if (isEditMode) {
        // Disable editing and save content back to the form
        section.contentEditable = "false";

        // Save the edited content back to the form
        const updatedValue = section.textContent || "";
        switch (sectionId) {
          case "editableName":
            (document.getElementById("name") as HTMLInputElement).value =
              updatedValue;
            break;
          case "editableEmail":
            (document.getElementById("email") as HTMLInputElement).value =
              updatedValue;
            break;
          case "editablePhone":
            (document.getElementById("phone") as HTMLInputElement).value =
              updatedValue;
            break;
          case "editableEducation":
            (document.getElementById("education") as HTMLTextAreaElement).value =
              updatedValue;
            break;
          case "editableExperience":
            (document.getElementById("experience") as HTMLTextAreaElement).value =
              updatedValue;
            break;
          case "editableSkills":
            (document.getElementById("skills") as HTMLTextAreaElement).value =
              updatedValue;
            break;
        }
      } else {
        // Enable editing for all sections
        section.contentEditable = "true";
      }
    });

    // Toggle the button text between "Edit" and "Save"
    editButton.textContent = isEditMode ? "Edit" : "Save";
  });
}

// Toggle Skills Section visibility when button is clicked
document.getElementById("toggleSkills")?.addEventListener("click", function () {
  const skillsSection = document.getElementById("skillsSection") as HTMLElement;

  // Check if the skills section is currently hidden or shown
  if (skillsSection.style.display === "none") {
    // Show the skills section if hidden
    skillsSection.style.display = "block";
    (this as HTMLButtonElement).textContent = "Hide Skills Section"; // Update button text
  } else {
    // Hide the skills section if visible
    skillsSection.style.display = "none";
    (this as HTMLButtonElement).textContent = "Show Skills Section"; // Update button text
  }
});