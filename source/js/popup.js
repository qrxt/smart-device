'use strict';

var header = document.querySelector('.page-header');
var callRequestBtn = header.querySelector('.main-nav__call-request');

var feedbackPopup = document.querySelector('.feedback-popup');
var closeBtn = feedbackPopup.querySelector('.feedback-popup__close');
var overlay = document.querySelector('.overlay');

var feedbackPopupForm = feedbackPopup.querySelector('form');
var feedbackPopupFormName = feedbackPopupForm.querySelector('input[name="first-name"]');
var feedbackPopupFormPhone = feedbackPopupForm.querySelector('input[name="phone-number"]');

var selectorFeedbackPopupShow = 'feedback-popup--show';

var KEYCODE_ESCAPE = 27;

var userName = null;
var userPhoneNumber = null;

if (localStorage && localStorage.getItem('userName')) {
  userName = localStorage.getItem('userName');
}

if (localStorage && localStorage.getItem('userPhoneNumber')) {
  userPhoneNumber = localStorage.getItem('userPhoneNumber');
}

if (userName && userPhoneNumber) {
  feedbackPopupFormName.value = userName;
  feedbackPopupFormPhone.value = userPhoneNumber;
}

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

if (callRequestBtn) {
  callRequestBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    openPopup();
  });
}

if (feedbackPopupForm) {
  feedbackPopupForm.addEventListener('submit', function () {
    localStorage.setItem('userName', feedbackPopupFormName.value);
    localStorage.setItem('userPhoneNumber', feedbackPopupFormPhone.value);

    feedbackPopupForm.submit();
  });
}
