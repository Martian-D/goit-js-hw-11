import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const userQuery = event.currentTarget.elements['search-text'].value.trim();
  if (userQuery === '') {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: '#ef4040',
      messageColor: '#fff',
      position: 'topRight',
      maxWidth: '432px',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(userQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: '#ef4040',
          messageColor: '#fff',
          position: 'topRight',
          maxWidth: '432px',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
});
