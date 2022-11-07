const openMenu = (buttonElem, menuElem) => {
  const button = document.querySelector(buttonElem);
  const menu = document.querySelector(menuElem);

  button.addEventListener('click', (elem) => {
    elem.preventDefault();
    menu.classList.toggle('header--opened');
  });
};

openMenu('.header__button', '.header');

// Валидация формы
const forms = document.querySelectorAll('.js-form');

forms.forEach((formElem) => {
  const pristine = new Pristine(formElem, {
    classTo: 'form__input-wrapper',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
    errorTextParent: 'form__input-wrapper',
    errorTextTag: 'span',
    errorTextClass: 'form__error',
  });

  formElem.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      formElem.submit();
    }
  });
});
