/*
* Petra Hastman, 2023 
* 
* Search Movies/People & display Movie lists
* Uses the TMDB API - https://www.themoviedb.org/
* 
* Fetches lists for top rated movies or popular movies. 
* Fetches movies, tv-series or people matching a user search.
* Info displayed for each movie
* - Image
* - Title
* - Release date
* For searched movies it also displays
* - Description/overview
* For searched person it displays
* - Name
* - Image
* - Department person is famous for
* - List of movies/tv the person is most known for, includion mediatype
*/


import {fetchMovieList, fetchMoviesOrPerson, fetchTrendingMovies,fetchMovieDetails } from './modules/fetch-movies.js'; 
import {topRatedBtnImg, popularBtnImg, displayMovieList, displayMovieorPerson, removePrevLists, displayTrendingMovies, displayMovieDetails, displayError} from './modules/display-movies.js'; 



/*****************************************
 Get API info for start images
********************************************/

window.addEventListener("load", onPageLoad);

function onPageLoad(){

  fetchMovieList('top_rated')
  .then (topRatedBtnImg)
  .catch(displayError);

  fetchMovieList('popular')
  .then (popularBtnImg)
  .catch(displayError);

  fetchTrendingMovies()
  .then (displayTrendingMovies)
  .catch(displayError);

}

/*********************************
 Get Top rated or Popular movies
**********************************/

const movieListButtonsContainer = document.querySelector('#movie-list-buttons');

movieListButtonsContainer.addEventListener('click', (event)=>{
  removePrevLists();

  const topOrpop = event.target.value;
  const movieListHeader = document.querySelector('#movieListHeader');
  movieListHeader.innerText = event.target.getAttribute('name');
    
  fetchMovieList(topOrpop)
  .then (displayMovieList)
  .catch(displayError);
})

/*********************************
 Get search query from form
**********************************/

let searchQuery = '';
const form = document.querySelector('form');

form.addEventListener('submit', formSubmit);
function formSubmit(event){
  event.preventDefault();
  removePrevLists();

  searchQuery = document.querySelector('#searchQuery').value.trim();
 
  fetchMoviesOrPerson(searchQuery, 1)
    .then(displayMovieorPerson)
    .catch(displayError);

  form.reset();
};


const nextButton = document.querySelector('#nextPage');
const prevButton = document.querySelector('#prevPage');

nextButton.addEventListener('click', changePage);
prevButton.addEventListener('click', changePage);

function changePage(event){
  removePrevLists();
  const currentPage = event.target.value;
 
  fetchMoviesOrPerson(searchQuery, currentPage)
    .then(displayMovieorPerson)
    .catch(displayError);
}


const resultContainer = document.querySelector('#resultContainer');
const movieListContainer = document.querySelector('#movieListContainer');
const startGrid = document.querySelector('#startGrid');

resultContainer.addEventListener('click', getMovieDetails);
movieListContainer.addEventListener('click', getMovieDetails);
startGrid.addEventListener('click', getMovieDetails);


function getMovieDetails(event){
  const targetArticle = event.target.closest('article');
  let movieId = '';
  if(event.target.tagName === 'IMG'){    
    movieId = event.target.getAttribute('id');
  }
  else if(targetArticle.tagName === 'ARTICLE') {  
      movieId = targetArticle.getAttribute('id');

  }
  fetchMovieDetails(movieId)
  .then (displayMovieDetails)
  .catch(displayError);
}