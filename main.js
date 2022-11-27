const button = document.getElementById('main-slider-arrow');

const image1 = document.getElementById('main-slider-01');
const image2 = document.getElementById('main-slider-02');
const image3 = document.getElementById('main-slider-03');

const contact = document.getElementById('navbar-contact');
const information = document.getElementById('navbar-information');

const contentcontact = document.getElementById('content-contact');
const contentinformation = document.getElementById('content-information');

const modal = document.getElementById('total-modal-content');
const icon = document.getElementById('navbar-icon');

const contactmodal = document.getElementById('total-contact');
const informationmodal = document.getElementById('total-information');
let img = 0;

icon.addEventListener('click', () => {
    modal.style.display === 'none' ? modal.style.display = 'flex' : modal.style.display = 'none'
});

contactmodal.addEventListener('click', () => {
    contentcontact.scrollIntoView()
    modal.style.display = 'none'
});

informationmodal.addEventListener('click', () => {
    contentinformation.scrollIntoView()
    modal.style.display = 'none'
});

contact.addEventListener('click', () => {
    contentcontact.scrollIntoView()
});

information.addEventListener('click', () => {
    contentinformation.scrollIntoView()
});

button.addEventListener('click', () => {
    switch (img) {
        case 0:
            img += 1
            image1.style.display = 'block';
            image3.style.display = 'none';
            break;
        case 1:
            img += 1
            image2.style.display = 'block';
            image1.style.display = 'none';
            break;
        case 2:
            img += 1
            image3.style.display = 'block';
            image2.style.display = 'none';
            break;
    }
    if (img === 3) {
        img = 0
    }
});