import './style.css';
import { showMovies } from './modules/popullateMovie';
import { showTvShows } from './modules/populateTvshows';

const component = () => {
  showMovies();
  showTvShows();
};

document.addEventListener('DOMContentLoaded', component);