'use strict';

var SERVICES_Y_POSITION = 900;
var SMOOTH_SCROLL_DURATION = 500;

var scrollBtn = document.querySelector('.scroll-down');

var easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function scrollTo(to, duration) {
  var element = document.scrollingElement;
  var start = (element && element.scrollTop) || window.pageYOffset;
  var change = to - start;
  var increment = 20;
  var currentTime = 0;

  var animateScroll = function () {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      window.setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

if (scrollBtn) {
  scrollBtn.classList.remove('scroll-down--nojs');
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    scrollTo(SERVICES_Y_POSITION, SMOOTH_SCROLL_DURATION);
  });
}
