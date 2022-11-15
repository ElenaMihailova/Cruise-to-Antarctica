import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {scrollLock} from './utils/scroll-lock';

document.querySelector('.nojs').classList.remove('nojs');

const openMenu = (buttonElem, menuElem) => {
  const button = document.querySelector(buttonElem);
  const menu = document.querySelector(menuElem);

  button.addEventListener('click', (elem) => {
    elem.preventDefault();
    menu.classList.toggle('header--opened');
    scrollLock.disableScrolling();
  });
};

const closeMenu = (coverElem, menuElem) => {
  const menu = document.querySelector(menuElem);
  const cover = document.querySelector(coverElem);

  cover.addEventListener('click', () => {
    menu.classList.remove('header--opened');
  });
};

openMenu('.header__button', '.header');
closeMenu('.header__cover-js', '.header');

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


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
