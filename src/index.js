(() => {
  const refs = {
    showBtns: document.querySelector('[data-show-btns]'),
    hideBtns: document.querySelector('[data-hide-btns]'),
    btns: document.querySelector('[data-btns]'),
    btnsBox: document.querySelector('.btns-box'),
    imgs: document.querySelector('[data-imgs]'),
  };

  refs.showBtns.addEventListener('click', toggleBox);
  refs.hideBtns.addEventListener('click', toggleBox);
  refs.btns.addEventListener('click', toggleBox);
  refs.btnsBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleBox() {
    refs.btns.classList.remove('is-hidden');
    refs.imgs.classList.add('is-hidden');
  }
})();

(() => {
  const refs = {
    showImgs: document.querySelector('[data-show-imgs]'),
    hideImgs: document.querySelector('[data-hide-imgs]'),
    imgs: document.querySelector('[data-imgs]'),
    imgsBox: document.querySelector('.imgs-box'),
    btns: document.querySelector('[data-btns]'),
  };

  refs.showImgs.addEventListener('click', toggleBox);
  refs.hideImgs.addEventListener('click', toggleBox);
  refs.imgs.addEventListener('click', toggleBox);
  refs.imgsBox.addEventListener('click', e => {
    e.stopPropagation();
  });

  function toggleBox() {
    refs.btns.classList.add('is-hidden');
    refs.imgs.classList.remove('is-hidden');
  }
})();
