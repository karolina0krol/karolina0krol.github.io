document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const container = document.querySelector('.flex-container');

  console.log('Left arrow:', leftArrow);
  console.log('Right arrow:', rightArrow);
  console.log('Container:', container);

  if (!leftArrow || !rightArrow || !container) {
    console.log('Brak elementów!');
    return;
  }

  leftArrow.style.opacity = '0';
  leftArrow.style.pointerEvents = 'none';

  function updateArrows() {
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (scrollLeft > 10) {
      leftArrow.style.opacity = '0.6';
      leftArrow.style.pointerEvents = 'all';
    } else {
      leftArrow.style.opacity = '0';
      leftArrow.style.pointerEvents = 'none';
    }

    if (scrollLeft >= maxScroll - 10) {
      rightArrow.style.opacity = '0';
      rightArrow.style.pointerEvents = 'none';
    } else {
      rightArrow.style.opacity = '0.6';
      rightArrow.style.pointerEvents = 'all';
    }
  }

  container.addEventListener('scroll', updateArrows);

  rightArrow.addEventListener('click', () => {
    console.log('Klik w prawo');
    container.scrollLeft += 600;
  });

  leftArrow.addEventListener('click', () => {
    console.log('Klik w lewo');
    container.scrollLeft -= 600;
  });

  updateArrows();
});