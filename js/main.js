let currentSlide = 0;
console.log(currentSlide);

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.children.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Обновляем отображение слайдов
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Обновляем активные точки пагинации
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// function currentSlide(index) {
//   showSlide(index);
// }

// Автоматическая смена слайдов каждые 3 секунды
// setInterval(() => {
//   nextSlide();
// }, 3000);

// Инициализация первой точки как активной
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dot")[0].classList.add("active");
});
