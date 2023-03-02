import './style.css';
import logoFrida from './img/FridaLogo.png'
import burguerImg from './img/burger.jpg'
import chilaquilesImg from './img/chilaquiles.jpg'
import fajitasImg from'./img/fajitas.jpg'
import quesadillaImg from './img/quesadilla.jpg'
import tacoImg from './img/taco.jpg'
import salchipapasImg from './img/salchipapas.jpg'
import principalImg from './img/iconFridas.png'

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
  const plates = {
    burger: {
      img: burguerImg,
      price: '8',
      details: 'Ground beef or other meat (such as turkey, chicken, or veggie patties), Salt and pepper, Buns, Lettuce, Tomato, Onion, Cheese, Ketchup, Mustard, Mayonnaise, Pickles',
    },
    chilaquiles: {
      img: chilaquilesImg,
      price: '8',
      details: 'Corn tortillas Vegetable oil or cooking spray, Red or green salsa or sauce (made with tomatoes, tomatillos, chilies, and other seasonings), Onion, Garlic, Salt, Queso fresco or other cheese, Crema or sour cream, Avocado, Cilantro, Some variations of Chilaquiles may also include chicken, chorizo, or eggs as additional toppings. The exact ingredients used can be adjusted to taste, and there are many ways to customize the dish.',
    },
    fajitas: {
      img: fajitasImg,
      price: '6.5',
      details: 'Meat (usually beef, chicken, or shrimp), Bell peppers (usually red, green, and/or yellow), Onion, Garlic, Lime juice, Olive oil, Chili powder, Cumin, Salt and pepper, Flour or corn tortillas, Toppings such as sour cream, guacamole, shredded cheese, and salsa.',
    },
    quesadilla: {
      img: quesadillaImg,
      price: '12',
      details: 'Flour or corn tortillas, Shredded cheese (such as cheddar, Monterrey Jack, or queso blanco), Optional fillings such as cooked chicken, steak, shrimp, beans, vegetables (such as peppers, onions, or mushrooms), or salsa',
    },
    taco: {
      img: tacoImg,
      price: '9',
      details: 'Corn or flour tortillas, Meat (such as beef, chicken, pork, or fish) or beans for a vegetarian option, Seasonings for the meat (such as cumin, chili powder, or garlic), Vegetables (such as lettuce, tomatoes, onions, or peppers), Cheese (such as queso fresco, cheddar, or Monterey Jack), Salsa or hot sauce, Sour cream or guacamole',
    },
    salchipapas: {
      img: salchipapasImg,
      price: '10',
      details: 'French fries (papas fritas), either homemade or store-bought, Sausages (salchichas), sliced or diced and fried, Salsa golf, a sauce made with ketchup and mayonnaise, or other sauces such as chimichurri, garlic aioli, or hot sauce, Optional toppings such as diced onions, tomatoes, or peppers, Salt and pepper',
    }
  };
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu')

  for (let plate in plates) {
    if (plates.hasOwnProperty(plate)) {
      const foodItem = document.createElement('div');
      foodItem.classList.add('food-items');

      const foodImg = document.createElement('img');
      foodImg.src = plates[plate].img;

      const details = document.createElement('div');
      details.classList.add('details');

      const detailsSub = document.createElement('div');
      detailsSub.classList.add('details-sub');

      const foodName = document.createElement('h5');
      foodName.textContent = plate.replace(/-/g, ' ');

      const foodPrice = document.createElement('h5');
      foodPrice.classList.add('price');
      foodPrice.textContent = `$${plates[plate].price}`;

      detailsSub.appendChild(foodName);
      detailsSub.appendChild(foodPrice);

      const foodDetails = document.createElement('p');
      foodDetails.textContent = plates[plate].details.replace(/\n\s+/g, '\n');

      details.appendChild(detailsSub);
      details.appendChild(foodDetails);
      
      foodItem.appendChild(foodImg);
      foodItem.appendChild(details);
      menuContainer.appendChild(foodItem);
    }
  }

  return menuContainer;
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
const fridaIcon = document.createElement('img');
fridaIcon.classList.add('initIcon');
fridaIcon.src =  principalImg;
main.appendChild(fridaIcon);
content.appendChild(navBar());
content.appendChild(main);

