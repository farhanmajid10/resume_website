// Select all list items within the timeline
const timelineItems = document.querySelectorAll(".timeline li");

// Add a click event to each timeline item to display more info
timelineItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Retrieve data attributes
    const duration = item.dataset.duration;
    const company = item.dataset.company;
    const role = item.dataset.role;
    const details = item.dataset.details;

    // Simple approach: Show an alert with the details
    // You can replace this with a modal, collapsible panel, or another UI element.
    alert(
      `Company: ${company}\n` +
      `Role: ${role}\n` +
      `Duration: ${duration}\n\n` +
      `Details: ${details}`
    );
  });
});
