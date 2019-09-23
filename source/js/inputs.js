'use strict';

var phoneNumberInputs = document.querySelectorAll('form input[type="tel"]');

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var maskPhoneNumberInput = function (input) {
  return new window.IMask(input, maskOptions);
};

phoneNumberInputs.forEach(function (input) {
  maskPhoneNumberInput(input);
});
