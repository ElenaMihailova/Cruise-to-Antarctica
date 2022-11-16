import {ScrollLock} from './scroll-lock';

const _scrollLock = new ScrollLock();


const closeMenu = (coverElem, menuElem) => {
  const menu = document.querySelector(menuElem);
  const cover = document.querySelector(coverElem);

  cover.addEventListener('click', () => {
    menu.classList.remove('header--opened');
    _scrollLock.enableScrolling();
  });
};

const closeMenuLink = (menuElem) => {
  const links = document.querySelector('.header__navigation').querySelectorAll('.navigation__link');

  links.forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelector(menuElem).classList.remove('header--opened');
      _scrollLock.enableScrolling();
    });
  });
};

const menuHeader = (buttonElem, menuElem) => {
  const button = document.querySelector(buttonElem);
  const menu = document.getElementById(menuElem);

  button.addEventListener('click', (elem) => {
    elem.preventDefault();

    if (!menu.classList.contains('header--opened')) {
      menu.classList.add('header--opened');
      _scrollLock.disableScrolling();
    } else {
      menu.classList.remove('header--opened');
      _scrollLock.enableScrolling();
    }
  });
};

export {menuHeader, closeMenu, closeMenuLink};
