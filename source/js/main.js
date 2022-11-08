document.querySelector('.nojs').classList.remove('nojs');

const openMenu = (buttonElem, menuElem) => {
  const button = document.querySelector(buttonElem);
  const menu = document.querySelector(menuElem);

  button.addEventListener('click', (elem) => {
    elem.preventDefault();
    menu.classList.toggle('header--opened');
  });
};

openMenu('.header__button', '.header');

window.onload = function () {

  const form = document.querySelector('.js-form');
  const pristine = new Pristine(form, {
    classTo: 'form__input-wrapper',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__input-wrapper',
    errorTextTag: 'span',
    errorTextClass: 'form__error',
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      form.submit();
    }
  });
};
