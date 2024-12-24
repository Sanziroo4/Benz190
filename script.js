let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next-btn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

document.getElementById('prev-btn').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
});

// Изначально показываем первый слайд
slides[currentSlide].classList.add('active');

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
});

gsap.from(".banner-container", { duration: 1.5, opacity: 0, y: -50 });
 