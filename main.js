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
  removePrevLists()

   // const topOrpop = event.target.getAttribute('value');
  const topOrpop = event.target.value //value är satt som det värde det ska vara i url i moviedatabase

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
 
  // searchResultHeader.style.display = 'block';
  fetchMoviesOrPerson(searchQuery, 1)
    .then(displayMovieorPerson)
    .catch(displayError);
    //.catch(err => console.error('error:' + err));
 
  form.reset();
};


/****** PAGINATION for search ************* */

const nextButton = document.querySelector('#nextPage');
const prevButton = document.querySelector('#prevPage');

nextButton.addEventListener('click', changePage);
prevButton.addEventListener('click', changePage);

function changePage(event){
  removePrevLists();
  const currentPage = event.target.value;

  console.log('currentPage i main');
  console.log(currentPage);
  // const searchQuery = document.querySelector('#searchQuery').value;
  console.log('searchQuery');
  console.log(searchQuery);
 
  fetchMoviesOrPerson(searchQuery, currentPage)
    .then(displayMovieorPerson)
    .catch(displayError);
    // .catch(err => console.error('error:' + err));
}


const resultContainer = document.querySelector('#resultContainer');
const movieListContainer = document.querySelector('#movieListContainer');
// const startSection = document.querySelector('#startSection');
const startGrid = document.querySelector('#startGrid');
// const startGridDiv = document.querySelector('#startGrid > div');
console.log('movieListContainer');
console.log(movieListContainer);
console.log('startGrid');
console.log(startGrid);
// const movieArticles = document.querySelectorAll('#movieListContainer > article');
// const movieArticles = document.querySelectorAll('article');

resultContainer.addEventListener('click', getMovieDetails);
movieListContainer.addEventListener('click', getMovieDetails);
startGrid.addEventListener('click', getMovieDetails); // Vaför funkar inte denna?

// function getMovieDetails(event){
//   const movieArticles = document.querySelectorAll('article');
//   console.log(event.target, event.currentTarget);
//   console.log('You clicked: '+event.currentTarget.tagName);
//   // console.log('movieArticles nedan');
//   // console.log(movieArticles);


//   let movieId = '';
//   if(event.target.tagName === 'ARTICLE'){
//     // event.preventDefault();
//     removePrevLists();
    
//     movieId = event.target.getAttribute('id');
//     // const MovieArticle = movieArticles.target.getAttribute('id');
//     console.log('movieId');
//     console.log(movieId);
    
//     // event.stopPropagation();
//     // removePrevLists();
//     fetchMovieDetails(movieId)
//     .then (displayMovieDetails)
//     .catch(displayError);
//   }
//   else{
//     console.log('Article är inte klickad');
//   }
// };


function getMovieDetails(event){
  // const movieArticles = document.querySelectorAll('article');
  console.log(event.target.closest('article')); //claras förslag

  if(event.target.classList.contains('details') || event.target.classList.contains('detailsClick')){
    // console.log('Det är en detailsknapp');
    // event.preventDefault();

    // console.log(event.target, event.currentTarget);
    // console.log('You clicked: '+event.currentTarget.tagName);
    removePrevLists();
    
    const movieId = event.target.getAttribute('id');
    console.log('movieId');
    console.log(movieId);
    
    fetchMovieDetails(movieId)
    .then (displayMovieDetails)
    .catch(displayError);
  }
};











  // let movieId = '';
  // for (const event of movieArticles ){
  //   console.log('event forloopen');
  //   console.log(event);
  //   console.log('event.target');
  //   console.log(event.target);
  //   // console.log(event.getAttribute('id'));
  //   movieId = event.getAttribute('id');
  //   // const MovieArticle = movieArticles.target.getAttribute('id');
  //   console.log('movieId');
  //   console.log(movieId);

  //   removePrevLists();   
  // }


/*********************************
 Get movies from search
**********************************/
// getTopRatedMovies()
//   .then (displayMovies);
    // .then(response => console.log(response))
    // .catch(err => console.error('error:' + err));


  // fetch(url, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error('error:' + err));

  //Måste nog skicka med ett object i fetch


// /*********************************
//  Get search query from form
// **********************************/

// const form = document.querySelector('form');
// const resultCountriesSection = document.querySelector('#resultCountries');
// const searchResultHeader = document.querySelector('#searchResult');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const searchQuery = document.querySelector('#searchQuery').value;
//   const countryOrLanguage = document.querySelector('input[name="searchChoice"]:checked').value;

//   fetchCountryInfo(searchQuery, countryOrLanguage)
//     .then(displayCountry)
//     .catch(displayError);
 
//   resultCountriesSection.innerHTML ='';
//   form.reset();
  
// });






/*********************************
 Get search query from form ORGINAL TROR JAG
**********************************/



// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   removePrevLists()

//   const searchQuery = document.querySelector('#searchQuery').value;
//   const currentPage = document.querySelector('#nextPage').page;
//   // console.log('searchQuery');
//   // console.log(searchQuery);
 
//   // searchResultHeader.style.display = 'block';
//   fetchMoviesOrPerson(searchQuery, currentPage)
//     .then(displayMovieorPerson)
//     // .then(displayPerson)
//     // .catch(displayError);
//     // .catch(err => console.error('error:' + err));
 
//   form.reset();
// });