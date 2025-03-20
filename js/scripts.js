document.addEventListener('DOMContentLoaded', function() {
    // Dynamically set the current year in the footer
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();
  });
  