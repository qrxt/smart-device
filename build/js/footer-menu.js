'use strict';

var footer = document.querySelector('.page-footer');
var btnSelectors = ['.title-btn--address', '.title-btn--links'];

var btnToListAssoc = {
  '.title-btn--address': '.footer-address__items',
  '.title-btn--links': '.footer-links__list'
};

if (footer) {
  btnSelectors.forEach(function (menuBtnSelector) {
    var currentBtn = footer.querySelector(menuBtnSelector);
    if (currentBtn) {
      currentBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        var currentMenuSelector = btnToListAssoc[menuBtnSelector];
        var currentMenu = footer.querySelector(currentMenuSelector);

        if (currentMenu) {
          currentMenu.classList.toggle(currentMenuSelector.slice(1) + '--show');
        }
      });
    }
  });
}
