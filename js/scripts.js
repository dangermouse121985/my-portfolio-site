//Query Header Tage in each HTML page
let header = document.querySelector('header');
let logoURL = document.createElement('a');
logoURL.setAttribute('href', 'index.html')

//Create Logo Image and link davidlogo image file
let logoImg = document.createElement('img');
logoImg.classList.add('page-header__item');
logoImg.setAttribute('src', 'img/davidlogo.svg');
logoImg.setAttribute('alt', 'David Crichlow\'s Logo. An Emoji of David');

header.appendChild(logoImg);


//Create Main Header Navigation
let headerNav = document.createElement('nav');
headerNav.classList.add('main-navigation');
headerNav.classList.add('page-header__item');


//Create Header Nagivation List
let navigationList = document.createElement('ul');
navigationList.setAttribute('role', 'menubar');
navigationList.classList.add('navigation-list');


//Create Mobile menu Button
let listItem_menuButton = document.createElement('li');
listItem_menuButton.classList.add('navigation-list__item--mobile');
listItem_menuButton.setAttribute('role', 'presentation');
let menuButtonImg = document.createElement('img');
menuButtonImg.classList.add('menu_button');
menuButtonImg.setAttribute('src', 'img/menu-button.svg');
menuButtonImg.setAttribute('alt', 'Menu Button DropDown');
listItem_menuButton.appendChild(menuButtonImg);


//Create Home Navigation Link
let listItem_HomeURL = document.createElement('li');
listItem_HomeURL.classList.add('navigation-list__item');
listItem_HomeURL.setAttribute('role', 'presentation');
let homeURL = document.createElement('a');
homeURL.classList.add('navigaton-list__item');
homeURL.setAttribute('href', 'index.html');
homeURL.setAttribute('role', 'menuitem');
homeURL.innerText = 'Home';

if (header.classList.contains('home-header')){
    listItem_HomeURL.classList.add('navigation-list__item--active');
}
listItem_HomeURL.appendChild(homeURL);


//Create About Header Navigation Link
let listItem_AboutURL = document.createElement('li');
listItem_AboutURL.classList.add('navigation-list__item');
listItem_AboutURL.setAttribute('role', 'presentation');
let aboutURL = document.createElement('a');
aboutURL.classList.add('navigaton-list__item');
aboutURL.setAttribute('href', 'about.html');
aboutURL.setAttribute('role', 'menuitem');
aboutURL.innerText = 'About Me';

if (header.classList.contains('about-header')){
    listItem_AboutURL.classList.add('navigation-list__item--active');
}
listItem_AboutURL.appendChild(aboutURL);


//Create Work Header Navigation Link
let listItem_WorkURL = document.createElement('li');
listItem_WorkURL.classList.add('navigation-list__item');
listItem_WorkURL.setAttribute('role', 'presentation');
let workURL = document.createElement('a');
workURL.classList.add('navigaton-list__item');
workURL.setAttribute('href', 'work.html');
workURL.setAttribute('role', 'menuitem');
workURL.innerText = 'My Projects';

if (header.classList.contains('work-header')){
    listItem_WorkURL.classList.add('navigation-list__item--active');
}

listItem_WorkURL.appendChild(workURL);


//create Contact Header Navigation Link
let listItem_ContactURL = document.createElement('li');
listItem_ContactURL.classList.add('navigation-list__item');
listItem_ContactURL.setAttribute('role', 'presentation');
let contactURL = document.createElement('a');
contactURL.classList.add('navigaton-list__item');
contactURL.setAttribute('href', 'contact.html');
contactURL.setAttribute('role', 'menuitem');
contactURL.innerText = 'Contact';

if (header.classList.contains('contact-header')){
    listItem_ContactURL.classList.add('navigation-list__item--active');
}

listItem_ContactURL.appendChild(contactURL);


//Append Navigation List Items to the navigation list
navigationList.appendChild(listItem_menuButton)
navigationList.appendChild(listItem_HomeURL);
navigationList.appendChild(listItem_WorkURL);
navigationList.appendChild(listItem_AboutURL);
navigationList.appendChild(listItem_ContactURL);

//Apend navigate list to the main header navigation
headerNav.appendChild(navigationList);


//Append the main header navigation to the header
header.appendChild(headerNav);