var _a, _b, _c;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Collect input values from form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var profilePicture = (_a = document.getElementById("profile-picture").files) === null || _a === void 0 ? void 0 : _a[0];
    // Initialize resume HTML structure
    var resumeHtml = `
      <h2>Generated Resume</h2>
  `;
    // If a profile picture is selected, read and display it
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            // Add profile picture to resume at the top-right corner with rounded styling
            var imageHtml = `
              <img src="${(_a = e.target) === null || _a === void 0 ? void 0 : _a.result}" alt="Profile Picture"
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
              <button type="button" id="generateLinkButton">Generate Shareable Link</button>
          `;
            // Display the final generated resume with the image
            document.getElementById("resumeOutput").innerHTML =
                resumeHtml;
            // Attach the "Edit" functionality after resume is rendered
            setupEditButton();
            // Attach the "Generate Shareable Link" functionality
            setupGenerateLinkButton();
        };
        reader.readAsDataURL(profilePicture); // Convert the image file to a Data URL for display
    }
    else {
        // If no image is selected, display resume without profile picture
        resumeHtml += `
          <p><strong>Name:</strong> <span id="editableName">${name}</span></p>
          <p><strong>Email:</strong> <span id="editableEmail">${email}</span></p>
          <p><strong>Phone:</strong> <span id="editablePhone">${phone}</span></p>
          <p><strong>Education:</strong> <span id="editableEducation">${education}</span></p>
          <p><strong>Experience:</strong> <span id="editableExperience">${experience}</span></p>
          <p><strong>Skills:</strong> <span id="editableSkills">${skills}</span></p>
          <button type="button" id="editResumeButton">Edit</button>
          <button type="button" id="generateLinkButton">Generate Shareable Link</button>
      `;
        // Display the resume without the image
        document.getElementById("resumeOutput").innerHTML =
            resumeHtml;
        // Attach the "Edit" functionality after resume is rendered
        setupEditButton();
        // Attach the "Generate Shareable Link" functionality
        setupGenerateLinkButton();
    }
});
// Function to enable/disable editing for the entire resume
function setupEditButton() {
    var editButton = document.getElementById("editResumeButton");
    var editableSections = [
        "editableName",
        "editableEmail",
        "editablePhone",
        "editableEducation",
        "editableExperience",
        "editableSkills",
    ];
    editButton.addEventListener("click", function () {
        // Check if currently in edit mode
        var isEditMode = editButton.textContent === "Save";
        editableSections.forEach(function (sectionId) {
            var section = document.getElementById(sectionId);
            if (isEditMode) {
                // Disable editing and save content back to the form
                section.contentEditable = "false";
                // Save the edited content back to the form
                var updatedValue = section.textContent || "";
                switch (sectionId) {
                    case "editableName":
                        document.getElementById("name").value =
                            updatedValue;
                        break;
                    case "editableEmail":
                        document.getElementById("email").value =
                            updatedValue;
                        break;
                    case "editablePhone":
                        document.getElementById("phone").value =
                            updatedValue;
                        break;
                    case "editableEducation":
                        document.getElementById("education").value =
                            updatedValue;
                        break;
                    case "editableExperience":
                        document.getElementById("experience").value =
                            updatedValue;
                        break;
                    case "editableSkills":
                        document.getElementById("skills").value =
                            updatedValue;
                        break;
                }
            }
            else {
                // Enable editing for all sections
                section.contentEditable = "true";
            }
        });
        // Toggle the button text between "Edit" and "Save"
        editButton.textContent = isEditMode ? "Edit" : "Save";
    });
}

// Function to generate a shareable link for the resume
function setupGenerateLinkButton() {
    var generateLinkButton = document.getElementById("generateLinkButton");
    generateLinkButton.addEventListener("click", function () {
        var resumeOutput = document.getElementById("resumeOutput").innerHTML;
        var blob = new Blob([resumeOutput], { type: "text/html" });
        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = "resume.html";
        link.textContent = "Download Resume";
        document.getElementById("resumeOutput").appendChild(link);
        // Optionally, you could show an alert or a message with the link
        alert("A shareable link has been generated. Check the 'Resume Output' section.");
    });
}

// Toggle Skills Section visibility when button is clicked
(_b = document.getElementById("toggleSkills")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var skillsSection = document.getElementById("skillsSection");
    // Check if the skills section is currently hidden or shown
    if (skillsSection.style.display === "none") {
        // Show the skills section if hidden
        skillsSection.style.display = "block";
        this.textContent = "Hide Skills Section"; // Update button text
    }
    else {
        // Hide the skills section if visible
        skillsSection.style.display = "none";
        this.textContent = "Show Skills Section"; // Update button text
    }
});
