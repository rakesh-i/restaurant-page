import './style.css';
import Img1 from './pizza.jpg'

function component0(){
    const header_container = document.createElement('div');
    header_container.className = 'container';

    const header = document.createElement('header');
    const logo = document.createElement('div');

    logo.id = 'logo';
    logo.textContent = 'Restaurent';

    header.appendChild(logo);

    const nav = document.createElement('nav');

    const locLink = document.createElement('button');
    locLink.textContent = "Hours&Location";

    const menuLink = document.createElement('button');
    menuLink.textContent = 'Menu';

    const aboutLink = document.createElement('button');
    aboutLink.textContent = 'About';

    const galleryLink = document.createElement('button');
    galleryLink.textContent = 'Gallery';

    nav.appendChild(locLink);
    nav.appendChild(menuLink);
    nav.appendChild(aboutLink);
    nav.appendChild(galleryLink);

    header.appendChild(nav);
    header_container.appendChild(header);
    return header_container;
}

function carousel(){
    const imgCarousel = document.createElement('div');
    imgCarousel.id = 'carousel';
    const pizza = new Image();
    pizza.src = Img1;
    imgCarousel.appendChild(pizza);
    return imgCarousel;
}

function component1(){
    const info  = document.createElement('div');
    info.id = 'info';
    const para = document.createElement('p');
    para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae euismod nibh. Sed purus sapien, molestie et sollicitudin eget, efficitur at leo. Suspendisse fermentum tortor sit amet consectetur consectetur. Morbi interdum massa id velit porttitor imperdiet. Nullam lacinia dolor neque, eu laoreet eros fringilla a. Nunc gravida erat nec feugiat dignissim. Quisque lacus sapien, condimentum a purus sed, varius tincidunt ante.";
    info.appendChild(para);
    const learnmore = document.createElement('button');
    learnmore.id = 'learnMore';
    learnmore.textContent = 'LEARN MORE';
    info.appendChild(learnmore);
    return info;
}

function component2(){
    const info = document.createElement('div');
    info.id = 'cards';

    const party = new Image();
    party.src = 'https://images.getbento.com/accounts/4e84fa105d04379104b8a7f98f1f966d/media/images/68607MIC_4548.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.57&fp-y=0.1';

    const container = document.createElement('div');
    container.id = 'card-cont';
    const header = document.createElement('div');
    header.id = 'comp2head';
    const content = document.createElement('div');
    content.id = 'comp2cont';

    header.textContent = 'Host a Party';
    content.textContent = "We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Colletta, you don't need an excuse to gather.";

    container.appendChild(header);
    container.appendChild(content);

    info.appendChild(party);
    info.appendChild(container);

    return info;
}


document.body.appendChild(component0());
const content = document.getElementById('content');
content.appendChild(carousel());
content.appendChild(component1());
content.appendChild(component2());
