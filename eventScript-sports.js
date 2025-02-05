hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function openPopup(cardNumber) {
  const popupOverlay = document.getElementById("popupOverlay");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  popupTitle.textContent = `Event ${cardNumber}`;
  popupDescription.textContent = `Details for Event ${cardNumber}. More information can be added here based on the card selected.`;

  popupOverlay.style.display = "flex";
}

function closePopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "none";
}