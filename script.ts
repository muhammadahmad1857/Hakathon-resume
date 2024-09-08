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
        // `float: right` moves image to the top-right corner
        // `border-radius: 50%` makes the image fully rounded
        // `margin-left: 20px` adds space between image and text

        // Add the image to the resume before the content
        resumeHtml = imageHtml + resumeHtml;

        // Resume content to display the collected information
        resumeHtml += `
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Education:</strong> ${education}</p>
              <p><strong>Experience:</strong> ${experience}</p>
              <p><strong>Skills:</strong> ${skills}</p>
          `;

        // Display the final generated resume with the image
        (document.getElementById("resumeOutput") as HTMLElement).innerHTML =
          resumeHtml;
      };
      reader.readAsDataURL(profilePicture); // Convert the image file to a Data URL for display
    } else {
      // If no image is selected, display resume without profile picture
      resumeHtml += `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Skills:</strong> ${skills}</p>
      `;

      // Display the resume without the image
      (document.getElementById("resumeOutput") as HTMLElement).innerHTML =
        resumeHtml;
    }
  });

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
