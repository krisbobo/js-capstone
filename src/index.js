import './style.css';
import { showMovies } from './modules/popullateMovie';
import { showTvShows } from './modules/populateTvshows';
import {
  homeLinks, tvLinks, mainContainer, tvCardContainer, cardContainer,
} from './modules/domElements';

const component = () => {
  showMovies();
  showTvShows();
};

document.addEventListener('DOMContentLoaded', component);

homeLinks.addEventListener('click', () => {
  tvCardContainer.classList.add('hide');
  mainContainer.classList.remove('hide');
  cardContainer.classList.remove('hide');
});
tvLinks.addEventListener('click', () => {
  mainContainer.classList.add('hide');
  cardContainer.classList.add('hide');
  tvCardContainer.classList.remove('hide');
  tvCardContainer.classList.add('show');
});