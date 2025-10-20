// JS (script, đặt sau phần HTML hoặc trong file riêng)
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  // tạo dots tương ứng số slide
  slides.forEach((_, idx) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = idx;
    dotsContainer.append(dot);
  });
  const dots = dotsContainer.querySelectorAll(".dot");

  function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    slides.forEach(s => s.style.display = "none");
    dots.forEach(d => d.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(++slideIndex);
  }
  function prevSlide() {
    showSlide(--slideIndex);
  }

  // event nút prev/next
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // click vào dot
  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      slideIndex = parseInt(e.target.dataset.index);
      showSlide(slideIndex);
    });
  });

  // auto chạy
  function autoPlay() {
    nextSlide();
    setTimeout(autoPlay, 5000); // 5 giây đổi ảnh
  }

  // khởi tạo
  showSlide(slideIndex);
  setTimeout(autoPlay, 5000);
});
