
if (document.getElementById('timestamp')) {

  document.getElementById('timestamp').value = new Date().toISOString();

  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  window.openModal = openModal;
  window.closeModal = closeModal;
}

if (document.getElementById('first-name')) {
  const urlParams = new URLSearchParams(window.location.search);

  document.getElementById('first-name').textContent = urlParams.get('first-name') || 'N/A';
  document.getElementById('last-name').textContent = urlParams.get('last-name') || 'N/A';
  document.getElementById('email').textContent = urlParams.get('email') || 'N/A';
  document.getElementById('phone').textContent = urlParams.get('phone') || 'N/A';
  document.getElementById('org-name').textContent = urlParams.get('org-name') || 'N/A';
  document.getElementById('membership-level').textContent = urlParams.get('membership-level') || 'N/A';
  document.getElementById('description').textContent = urlParams.get('description') || 'N/A';
  document.getElementById('timestamp').textContent = urlParams.get('timestamp') || 'N/A';

  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
}

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = new Date().getTime();
const message = document.querySelector("#visit-message");

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceVisit < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else {
        message.textContent = `You last visited ${daysSinceVisit} day${daysSinceVisit > 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);
