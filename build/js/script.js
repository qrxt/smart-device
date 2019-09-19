'use strict';

var header = document.querySelector('.page-header');
var callRequestBtn = header.querySelector('.main-nav__call-request');

var overlay = document('.overlay');

callRequestBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  overlay.classList.add('overlay--show');
});
