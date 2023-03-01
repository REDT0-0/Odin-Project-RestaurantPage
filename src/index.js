import './style.css';
import logo from './img/FridaLogo.png'

const content =  document.querySelector('.content');

const navBar = () => {
   const img = document.createElement('img')
   img.src = logo;
   return img;
}

content.appendChild(navBar())
