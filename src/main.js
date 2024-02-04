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
  const loadMoreBtn = document.getElementById('load-more-btn');

  let searchQuery = '';
  let page = 1;

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();

    searchQuery = searchBar.value.trim();
    page = 1;

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }

    loading.style.display = 'block';
    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';

    const apiKey = '42199698-86ec1f577e997e517f326ea6b';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

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

        if (data.totalHits > 15) {
          loadMoreBtn.style.display = 'block';
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

  loadMoreBtn.addEventListener('click', async () => {
    page++;

    const apiKey = '42199698-86ec1f577e997e517f326ea6b';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      if (data.hits.length === 0) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
          title: 'Info',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
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

        const cardHeight = document
          .querySelector('.card')
          .getBoundingClientRect().height;
        window.scrollBy(0, cardHeight * 2);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});
