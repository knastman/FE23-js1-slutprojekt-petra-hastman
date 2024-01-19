/*
* Petra Hastman, 2023 
* 
* Search Movies/People/Tv-series & display Movie lists
* Uses the TMDB API - https://www.themoviedb.org/
*
*/


import {fetchMovieList, fetchMoviesOrPerson, fetchTrendingMovies,fetchMovieDetails, fetchPersonDetails, fetchTvSeriesDetails } from './modules/fetch-movies.js'; 
import {topRatedBtnImg, popularBtnImg, displayMovieList, displayMovieorPerson, removePrevLists, displayTrendingMovies, displayMovieDetails, displayPersonDetails, displayTVDetails, displayError} from './modules/display-movies.js'; 


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

const movieListContainer = document.querySelector('#movieListContainer');
const startGrid = document.querySelector('#startGrid');
const resultContainer = document.querySelector('#resultContainer');
const movieDetailsContainer = document.querySelector('#movieDetailsContainer');
const personDetailsContainer = document.querySelector('#personDetailsContainer');
const tvSeriesDetailsContainer = document.querySelector('#tvSeriesDetailsContainer');
// const castContainer = document.querySelector('castContainer');

resultContainer.addEventListener('click', getMovieOrPersonDetails);
movieListContainer.addEventListener('click', getMovieOrPersonDetails);
startGrid.addEventListener('click', getMovieOrPersonDetails);
movieDetailsContainer.addEventListener('click', getMovieOrPersonDetails);
personDetailsContainer.addEventListener('click', getMovieOrPersonDetails);
tvSeriesDetailsContainer.addEventListener('click', getMovieOrPersonDetails);


/*********************************
        Details
**********************************/

function getMovieOrPersonDetails(event){
  removePrevLists();
  const targetArticle = event.target.closest('article');
  const id = targetArticle.getAttribute('id');
 
  if (targetArticle.matches('.personArticle')){
    fetchPersonDetails(id)
    .then (displayPersonDetails)
    .catch(displayError);
  }
  else if (targetArticle.matches('.tvSeriesArticle')){
    fetchTvSeriesDetails(id)
    .then (displayTVDetails)
    .catch(displayError);
  }
  else{
    fetchMovieDetails(id)
    .then (displayMovieDetails)
    .catch(displayError);
  }

}