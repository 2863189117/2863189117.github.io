// 首页特色文章轮播组件的JavaScript实现

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.featured-slider');
  const slides = document.querySelectorAll('.featured-slide');
  const navButtons = document.querySelectorAll('.featured-nav button');
  
  if (!slider || slides.length === 0) return;
  
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // 初始化导航按钮
  navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // 切换到指定幻灯片
  function goToSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    
    slider.scrollTo({
      left: slides[index].offsetLeft,
      behavior: 'smooth'
    });
    
    // 更新当前幻灯片索引和导航按钮状态
    currentSlide = index;
    updateNavButtons();
  }
  
  // 更新导航按钮状态
  function updateNavButtons() {
    navButtons.forEach((button, index) => {
      if (index === currentSlide) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
  // 自动轮播
  let autoplayInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
  
  // 鼠标悬停时暂停自动轮播
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  // 鼠标离开时恢复自动轮播
  slider.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  });
  
  // 初始化第一张幻灯片
  updateNavButtons();
});
