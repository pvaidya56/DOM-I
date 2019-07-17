const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
let navLinks = document.getElementsByTagName('a');
navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";

//Change Navigation color to green
let links = document.querySelectorAll('a');
links.forEach(link => {
  link.style.color = 'green'});

//Adding new items to the nav
let navLink0 = document.createElement('a');
let navLink7 = document.createElement('a');

let menu = document.getElementsByTagName('nav')[0];
menu.prepend(navLink0); 
menu.appendChild(navLink7);
navLink0.innerText = 'Blog';
navLink7.innerText = 'Follow Us';
navLink0.style.color = 'green';
navLink7.style.color = 'green';

//CTA Section

let heading = document.querySelector('h1');
heading.textContent = siteContent['cta']['h1'];
heading.style.whiteSpace = 'pre-wrap';

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

//Main Content
let featuresHeading = document.querySelector('div:nth-child(1) > h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];

let featuresContent = document.querySelector('div:nth-child(1) > p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let aboutHeading = document.querySelector('div:nth-child(2) > h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelector('div:nth-child(2) > p');
aboutContent.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesHeading = document.querySelector('div.bottom-content > div:nth-child(1) > h4');
servicesHeading.textContent = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelector('div.bottom-content > div:nth-child(1) > p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let productHeading = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
productHeading.textContent = siteContent['main-content']['product-h4'];

let productContent = document.querySelector('div.bottom-content > div:nth-child(2) > p');
productContent.textContent = siteContent['main-content']['product-content'];

let visionHeading = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelector('div.bottom-content > div:nth-child(3) > p');
visionContent.textContent = siteContent['main-content']['vision-content'];

//Contact Section

let contactHeading = document.querySelector('section.contact > h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

let address = document.querySelector('section.contact > p:nth-child(2)');
address.textContent = siteContent['contact']['address'];

let phone = document.querySelector('section.contact > p:nth-child(3)');
phone.textContent = siteContent['contact']['phone'];

let email = document.querySelector('section.contact > p:nth-child(4)');
email.textContent = siteContent['contact']['email'];

//Footer 

let footerSection = document.querySelector('footer > p');
footerSection.textContent = siteContent['footer']['copyright'];


