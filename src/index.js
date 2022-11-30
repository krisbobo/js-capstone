import './style.css';
import { showMovies } from './modules/popullateMovie';

const component = () => {
  showMovies();
};

document.addEventListener('DOMContentLoaded', component);