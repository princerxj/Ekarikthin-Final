hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function loadVideo(url) {
    const frame = document.getElementById('video-frame');
    frame.src = url;
}

function toggleFAQ(element) {
    const faqContainer = document.querySelector('.faq-container');
    const faqs = faqContainer.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
        if (faq !== element.parentElement) {
            faq.classList.remove('open');
        }
    });
  
    element.parentElement.classList.toggle('open');
}

document.querySelector('.secondary-btn').addEventListener('click', function() {
    window.location.href = 'event-technical.html';
});

document.querySelector('.primary-btn').addEventListener('click', function() {
    window.location.href = 'tech-avinyaindex.html';
});