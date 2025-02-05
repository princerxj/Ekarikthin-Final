hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

document.querySelector('.enter-btn').addEventListener('click', function() {
    const container = document.querySelector('.image-container');
    container.classList.add('split');
    setTimeout(() => {
        container.style.zIndex = '-100';
    }, 600);
    document.querySelector('.main-content').style.display = 'block';
});