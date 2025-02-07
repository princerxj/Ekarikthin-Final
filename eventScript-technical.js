hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

fetch('Events-Details/technical.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(event => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2 class="card-title">${event.title}</h2>
        <div class="image-container">
          <img src="Images/${event.imgSrc}" alt="${event.title}">
        </div>
        <button class="view-more-btn" onclick="openPopup(${event.id})">View More</button>
      `;
      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.log('Error fetching events:', error));

function openPopup(eventId) {
  fetch('Events-Details/technical.json')
    .then(response => response.json())
    .then(data => {
      const event = data.find(e => e.id === eventId);
      const popupOverlay = document.getElementById("popupOverlay");
      const popupTitle = document.getElementById("popup-title");
      const popupDescription = document.getElementById("popup-description");
      const popupTeam = document.getElementById("popup-team");
      const popupFees = document.getElementById("popup-fees");
      const popupPrizes = document.getElementById("popup-prizes");
      const popupRules = document.getElementById("popup-rules");
      const popupLocation = document.getElementById("popup-location");
      const popupDate = document.getElementById("popup-date");
      const popupContact = document.getElementById("popup-contact");
      const popupImg = document.getElementById("popup-img");
      const btn = document.getElementById("Register-btn");

      popupTitle.textContent = event.title;
      popupDescription.textContent = event.description;
      popupTeam.textContent = event.team;
      popupFees.textContent = event.fees;
      
      popupPrizes.innerHTML = event.prizes.map(prize => `<li>${prize}</li>`).join('');

      popupRules.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join('');
      
      popupLocation.textContent = event.location;
      popupDate.textContent = event.date;
      popupContact.textContent = event.contact;
      popupImg.src = `Images/${event.imgSrc}`;
      btn.addEventListener("click", () => {
        window.open(`${event.formlink}`);
      });
      popupOverlay.style.display = "flex";
    })
    .catch(error => console.log('Error fetching event data:', error));
}

function closePopup() {
  const popupOverlay = document.getElementById("popupOverlay");
  popupOverlay.style.display = "none";
}