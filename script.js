document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Demo only: show status message.
  const statusDiv = document.getElementById("form-status");
  statusDiv.textContent = "Thank you for reaching out! We'll get back to you soon.";
  statusDiv.style.color = "#36f9a6";
  this.reset();
});
