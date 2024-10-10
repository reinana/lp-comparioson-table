const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentIndex = 0;

// 次へボタンのクリックイベント
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // インデックスを更新
    updateSlidePosition();
});

// 前へボタンのクリックイベント
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // インデックスを更新
    updateSlidePosition();
});

// スライド位置を更新する関数
function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    slidesWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}