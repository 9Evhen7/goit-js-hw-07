import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createGalleryItems = (items) => { 
    return items.map(({ preview, original, description }) => {
        return `<li class = 'gallery__item'>
        <a href = '${original}' class ='gallery__link' >
            <img class ='gallery__image' 
                src = '${preview}'
                title = '${description}'
                alt = '${description}'>
        </a>
        </li>`
    }).join('');
};





const items = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', items);

let lightbox = new SimpleLightbox('.gallery a', { });



