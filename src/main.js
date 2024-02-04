import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './css/loading.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.form');
  const searchBar = document.getElementById('search-bar');
  const submitBtn = document.querySelector('.submit-btn');
  const gallery = document.getElementById('gallery');
  const loading = document.querySelector('.loading');

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    const searchQuery = searchBar.value.trim();

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }

    loading.style.display = 'block';

    const apiKey = '42199698-86ec1f577e997e517f326ea6b';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${limit}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      loading.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        gallery.innerHTML = '';
      } else {
        gallery.innerHTML = '';
        data.hits.forEach(image => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
    <a href="${image.largeImageURL}" data-lightbox="gallery">
      <img src="${image.webformatURL}" alt="${image.tags}"/>
    </a>
    <div class="card-info">
      <h3 class="img-desc">${image.tags}</h3>
      <div class="img-info">
      <p class="img-stat">Likes:<br>${image.likes}</p>
      <p class="img-stat">Views:<br>${image.views}</p>
      <p class="img-stat">Comments:<br>${image.comments}</p>
      <p class="img-stat">Downloads:<br>${image.downloads}</p>
      </div>
              </div>
   `;
          gallery.appendChild(card);
        });

        const lightbox = new SimpleLightbox('#gallery a', {
          captions: true,
          captionsData: 'alt',
          captionDelay: 250,
          captionPosition: 'bottom',
          history: false,
          animationSpeed: 250,
          close: true,
        });
        lightbox.refresh();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});

const fetchPostsBtn = document.querySelector('.content-btn');

// Controls the group number
let page = 1;
// Controls the number of items in the group
let limit = 15;
// In our case total number of pages is calculated on frontend
const totalPages = Math.ceil(110 / limit);

contentBtn.addEventListener('click', async () => {
  // Check the end of the collection to display an alert
  if (page > totalPages) {
    return iziToast.error({
      message: "We're sorry, there are no more posts to load",
    });
  }

  try {
    const posts = await addContent();
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      contentBtn.textContent = 'Load more';
    }
  } catch (error) {
    console.log(error);
  }
});
