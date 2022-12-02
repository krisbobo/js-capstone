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
  tvLinks.classList.remove('active');
  homeLinks.classList.add('active');
  mainContainer.classList.remove('hide');
  cardContainer.classList.remove('hide');
});
tvLinks.addEventListener('click', () => {
  mainContainer.classList.add('hide');
  tvLinks.classList.add('active');
  homeLinks.classList.remove('active');
  cardContainer.classList.add('hide');
  tvCardContainer.classList.remove('hide');
  tvCardContainer.classList.add('show');
});