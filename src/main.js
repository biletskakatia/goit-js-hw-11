import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchPhotoSearch} from './js/pixabay-api.js';
import {createImagesMarkup} from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const searchRes = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchQuery = event.target.querySelector('.search-input').value.trim();

    if (searchQuery === '') {
        searchRes.innerHTML = '';
        event.target.reset(); 
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation, enter a name',
            position: 'topRight',
        });
        return;
    }
    
    searchRes.innerHTML = '';
    console.log('Removing is-hidden class');
    loaderEl.classList.remove('is-hidden');

    fetchPhotoSearch(searchQuery).then(imagesData => {
        if (imagesData.total === 0 || !imagesData.hits) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
        }
    searchRes.innerHTML = createImagesMarkup(imagesData.hits);
    new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: 250,
        captionPosition: 'bottom',
    }).refresh();
    })
.catch(error => console.log(error))
.finally(() => {
    event.target.reset();
    console.log('Adding is-hidden class');
    loaderEl.classList.add('is-hidden');
})

}

searchFormEl.addEventListener('submit', onSearchFormSubmit);