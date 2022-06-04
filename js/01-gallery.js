import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createGalleryItems = (items) => { 
    return items.map(({ preview, original, description }) => {
        return `<div class = 'gallery__item'>
        <a href = '${original}' class ='gallery__link'>
            <img class ='gallery__image' 
                src = '${preview}'
                data-source = '${original}'
                alt = '${description}'>
        </a>
        </div>`
    }).join('');
};

const onClick = (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"
    width="800" height="600">`);
    instance.show();

    window.addEventListener('keydown', (e) => { 
        if (e.code === 'Escape') { 
            instance.close();
        }
    })
};

const items = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', items);

galleryRef.addEventListener('click', onClick);

