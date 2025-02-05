hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.querySelector(".technical-btn").addEventListener("click", function() {
  window.location.href = "event-technical.html";
});

document.querySelector(".cultural-btn").addEventListener("click", function() {
  window.location.href = "event-cultural.html";
});

document.querySelector(".sports-btn").addEventListener("click", function() {
  window.location.href = "event-sports.html";
});