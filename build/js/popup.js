'use strict';

var header = document.querySelector('.page-header');
var callRequestBtn = header.querySelector('.main-nav__call-request');

var feedbackPopup = document.querySelector('.feedback-popup');
var closeBtn = feedbackPopup.querySelector('.feedback-popup__close');
var overlay = document.querySelector('.overlay');

var selectorFeedbackPopupShow = 'feedback-popup--show';

var KEYCODE_ESCAPE = 27;

var closePopup = function () {
  if (overlay && feedbackPopup) {
    overlay.classList.remove('overlay--show');
    feedbackPopup.classList.remove(selectorFeedbackPopupShow);
  }
};

var openPopup = function () {
  if (overlay && feedbackPopup) {
    overlay.classList.add('overlay--show');
    feedbackPopup.classList.add(selectorFeedbackPopupShow);

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === KEYCODE_ESCAPE) {
        evt.preventDefault();

        closePopup();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        closePopup();
      });
    }

    overlay.addEventListener('click', function () {
      closePopup();
    });
  }
};

callRequestBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  openPopup();
});
