import './style.css';
import logoFrida from './img/FridaLogo.png'

const content = document.querySelector('.content');

const navBar = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const img = document.createElement('img')
  img.src = logoFrida;
  img.alt = 'Logo de Firdas';
  logo.appendChild(img);
  header.appendChild(logo);

  const nav = document.createElement('nav');
  const navli = document.createElement('ul');
  navli.classList.add('nav-links')

  const home = document.createElement('li');
  home.textContent = 'HOME';
  home.addEventListener('click', () => {
    render(home.textContent);
  })
  navli.appendChild(home);


  const menu = document.createElement('li');
  menu.textContent = 'MENU';
  menu.addEventListener('click', () => {
    render(menu.textContent);
  })
  navli.appendChild(menu);
  //render

  const contact = document.createElement('li');
  contact.textContent = 'CONTACT';
  contact.addEventListener('click', () => {
    render(contact.textContent);
  })
  navli.appendChild(contact);
  //render

  nav.appendChild(navli);
  header.appendChild(nav);
  return header;
}

const home = () => {
  const homeRest = document.createElement('div');
  homeRest.classList.add('card-presentation');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Somos Fridas';
  homeRest.appendChild(title);

  const description = document.createElement('p');
  description.textContent = "Fridas is a Mexican restaurant that offers a wide variety of authentic and delicious Mexican cuisine. As soon as you step into the restaurant, you are greeted with a warm and vibrant atmosphere that is reminiscent of Mexico's rich culture and heritage.The decor is colorful and lively, featuring murals and artwork inspired by the famous Mexican painter, Frida Kahlo.The menu at Fridas is extensive and features traditional Mexican dishes such as tacos, burritos, enchiladas, and fajitas, as well as other regional specialties.The dishes are made with fresh and high - quality ingredients, and the flavors are bold and rich, reflecting the diversity of Mexican cuisine.The staff at Fridas is friendly and knowledgeable, always willing to offer recommendations and suggestions.Whether you are in the mood for a casual dinner with friends or a special occasion celebration, Fridas is the perfect place to experience the authentic flavors and culture of Mexico.";
  homeRest.appendChild(description);
  return homeRest;
}

const menu = () => {
  
}

const contact = () => {
  const contacInfo = document.createElement("div");
  contacInfo.classList.add('contact-info');

  const header = document.createElement("h2");
  header.textContent = "Contatos";
  contacInfo.appendChild(header);

  const contacList = document.createElement("ul");

  const address = document.createElement("li");
  address.textContent = "Address:  1234 Calle del Sabor, Ciudad de México";
  contacList.appendChild(address);

  const phone = document.createElement("li");
  phone.textContent = "Phone number: +1 55 5555 5555";
  contacList.appendChild(phone);

  const email = document.createElement("li");
  email.textContent = "Email: info@fridas.com.mx";
  contacList.appendChild(email);

  contacInfo.appendChild(contacList);

  return contacInfo;
}

const render = (e) => {
  const mainDiv = document.querySelector('main');
  switch (e) {
    case 'HOME':
      while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
      }
      mainDiv.appendChild(home());
      break;
    case 'MENU':
      while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
      }
      mainDiv.appendChild(menu());
      break;
    case 'CONTACT':
      while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
      }
      mainDiv.appendChild(contact());
      break;
    default:
      while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
      }
      break;
  }

}

const main = document.createElement('main');
content.appendChild(navBar())
content.appendChild(main)

