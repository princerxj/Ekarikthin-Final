hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.querySelector('.explore-btn').addEventListener('click', function() {
    window.location.href = 'event.html';
});  