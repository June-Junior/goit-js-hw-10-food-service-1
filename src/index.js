import './styles.css';
import './index.html';
import menuSource from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const menuList = document.querySelector('.js-menu');

const markup = menuTemplate(menuSource);
menuList.insertAdjacentHTML('beforeend', markup);
