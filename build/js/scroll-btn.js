'use strict';

var SERVICES_Y_POSITION = 2150;

var scrollBtn = document.querySelector('.scroll-down');

if (scrollBtn) {
  scrollBtn.classList.remove('scroll-down--nojs');
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    window.scrollTo(0, SERVICES_Y_POSITION);
  });
}
