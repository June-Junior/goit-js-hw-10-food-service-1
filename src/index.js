import './styles.css';
import './index.html';
import menuSource from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };
const menuList = document.querySelector('.js-menu');

const markup = menuTemplate(menuSource);
menuList.insertAdjacentHTML('beforeend', markup);

const body = document.querySelector('body');
const themeToggleSwitch = document.querySelector('#theme-switch-toggle');
themeToggleSwitch.addEventListener('change', onToggleSwitchClick);

localStorageCheck();

function onToggleSwitchClick(evt) {

    console.log(evt.target); 
    console.log(evt.target.checked);
    
    console.log(body.classList.contains('dark-theme'));
    if (themeToggleSwitch.checked) {
        console.log("true");
        
        localStorage.setItem ('night', JSON.stringify({1: 2, 2: 1}));
        console.log(localStorage.getItem('night'));
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
     
    }   
    if (!themeToggleSwitch.checked) {
        console.log("false");    
        localStorage.clear();
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }    
}

function localStorageCheck() {
    const switchOn = localStorage.getItem('night');
    if (switchOn) {
        // localStorage.setItem ('my-theme', JSON.stringify({1: 2, 2: 1}));
        body.classList.add('dark-theme');
        themeToggleSwitch.checked = true;
    } 
}