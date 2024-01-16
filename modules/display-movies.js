const imgScrBase = 'https://image.tmdb.org/t/p/';
let fileSize = 'original'; 
const movieListAmount = 10; 

const allSections = document.querySelectorAll('section');

/*********************************
  Hide sections  
**********************************/

function hideElements(array){
  array.forEach((element) => element.classList.add("hide"));
}


/*********************************
  Set image in Top rated/Popular   
**********************************/

function topRatedBtnImg(movies){
  const buttonTopRatedImg = document.querySelector("#buttonTopRated");
  setButtonBgImage(movies, buttonTopRatedImg);
}

function popularBtnImg(movies){
  const buttonPopularImg = document.querySelector("#buttonPopular");
  setButtonBgImage(movies, buttonPopularImg);
}

function setButtonBgImage(movies, element) {
  fileSize = 'w300';
  const randomMovieIndex = Math.floor( _.random(0, (movieListAmount-1))); 
  const ImgSrc = movies.results[randomMovieIndex].backdrop_path;
  element.style.backgroundImage = `url(${imgScrBase}${fileSize}${ImgSrc})`;
};


/*********************************
  Movie lists 
**********************************/

function displayMovieList(movies){
  const movieListSection = document.querySelector('#movieList');
  hideElements(allSections);
  movieListSection.classList.remove("hide");
  fileSize = 'w185';
  for (const movie of movies.results.slice(0, movieListAmount) ){
    const movieArticle = document.createElement('article');
    const movieHeader = document.createElement('h3');
    const movieImg = document.createElement('img');
    const releaseDate = document.createElement('p');
   
    movieListContainer.append(movieArticle);
    movieArticle.append(movieImg, movieHeader,releaseDate);

    movieHeader.innerText = movie.title;
    releaseDate.innerText = 'Release date: ' + movie.release_date;
    movieImg.src = imgScrBase + fileSize + movie.poster_path;
    movieArticle.setAttribute("id", movie.id);
    movieImg.setAttribute("id", movie.id);
  }
}


/*********************************
Tredning movies (for startpage)
**********************************/

function displayTrendingMovies(movies){
  const startGrid = document.querySelector("#startGrid");
  fileSize = 'w500';

  for (const movie of _.shuffle(movies.results) ){
    const movieId = movie.id;
    const gridDiv = document.createElement('div');
    const startImg = document.createElement('img');
    startGrid.append(gridDiv);
    gridDiv.append(startImg);
    startImg.src = imgScrBase+fileSize+movie.poster_path;
    startImg.setAttribute("id", movieId);
  }
}


/*********************************
      Search   
**********************************/


function displayMovieorPerson(movieOrPerson){  
  console.log(movieOrPerson.results);

  const searchResult = document.querySelector('#searchresult');
  hideElements(allSections);
  searchResult.classList.remove("hide");

  const resultArray = movieOrPerson.results;
  const totalPages = movieOrPerson.total_pages;
  const currentPage = movieOrPerson.page;
  console.log(movieOrPerson);

  const nextButton = document.querySelector('#nextPage');
  const prevButton = document.querySelector('#prevPage');

  if (currentPage<totalPages) {
    nextButton.style.display = 'block';
    nextButton.classList.remove("faded");
    prevButton.style.display = 'block';
    prevButton.classList.add("faded");

    nextButton.value = currentPage + 1;

    if (currentPage>1) {
      prevButton.classList.remove("faded")
      prevButton.value = currentPage - 1;
    }
    else if (currentPage==1) {
      prevButton.classList.add("faded");
    }
  }
  else if (currentPage==totalPages){
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
  }
  else {
    nextButton.classList.add("faded");
  }

  // const flexContainer = document.createElement('div');

  for (const movie of resultArray ){
    const resultArticle = document.createElement('article');
    resultContainer.append(resultArticle);

    const articleHeader = document.createElement('h3');
    const asideMovieHeader = document.createElement('h5');
    const articleImage = document.createElement('img'); 
    const articleDiv = document.createElement('div'); 
    resultArticle.append(articleDiv);
    articleDiv.append(articleHeader, articleImage);
    // articleImage.setAttribute("id", movie.id);
    
    let articleHeaderTitle = '';
    let imgUrlPath = '';
  
    const mediaType = movie.media_type;
  
    
    // const id = movie.id;
    // resultArticle.setAttribute("id", id);
    
    
    if ((mediaType == 'movie')||(mediaType == 'tv')) {
      const movieId = movie.id;
      const releaseDate = document.createElement('p');
      const overview = document.createElement('p');
      imgUrlPath = movie.backdrop_path;
      fileSize = 'w1280';

      articleDiv.append(releaseDate, overview);
      resultArticle.setAttribute("id", movieId);

      articleHeaderTitle = movie.title;
      releaseDate.innerText = 'Release date: '+ movie.release_date;
      overview.innerText = movie.overview;

      if (mediaType == 'tv'){
        articleHeaderTitle = movie.name;
        releaseDate.innerText = 'First aired: ' + movie.first_air_date;
      }
    }





    else if (mediaType == 'person'){
      const personId = movie.id;
      resultArticle.setAttribute("id", personId);
      const knownForList = document.createElement('ul');
      const knownForHeader = document.createElement('h5');
      const knownForDepartment = document.createElement('div');
      const personInfo = document.createElement('div');
      resultArticle.append(personInfo);

      resultArticle.classList.add("flex-article");
      
      fileSize = 'w300';
      imgUrlPath = movie.profile_path;
      articleHeaderTitle = movie.name;

      personInfo.append(knownForDepartment);
      knownForDepartment.innerHTML = '<h4>Department</h4> '+ movie.known_for_department;
      const knownForArray = movie.known_for;
      
      if (knownForArray != null){
        personInfo.append( knownForHeader, knownForList);
        knownForHeader.innerText = 'Known for'
        for (const movieOrTv of knownForArray ){  
          const liKnownFor = document.createElement('li');
          const mediatype = movieOrTv.media_type;
          knownForList.append(liKnownFor);
          if (mediatype == 'tv'){
            // liKnownFor.innerText = 'Tv: ' + movieOrTv.name;
            liKnownFor.innerHTML = '<span class="medium"> ' + movieOrTv.name + ' </span> (TV)';
          } 
          else if (mediatype == 'movie'){
            liKnownFor.innerText = 'Movie: '+ movieOrTv.title;
            liKnownFor.innerHTML = '<span class="medium">'+ movieOrTv.title + '</span> (Movie)';
          }
        } 
      } 

    } 
    if (imgUrlPath != null){
      articleImage.src = imgScrBase+fileSize+imgUrlPath; 
    }
    articleHeader.innerText = articleHeaderTitle;
  }
}


/*********************************
      Details
**********************************/


function displayMovieDetails(movie){

  const movieDetails = document.querySelector('#movieDetails');
  hideElements(allSections);
  movieDetails.classList.remove("hide");

  const movieDetailsContainer = document.querySelector('#movieDetailsContainer');

  const movieDivContainer = document.createElement('div');
  const movieDiv = document.createElement('div');
  const movieDiv2 = document.createElement('div');
  const movieHeader = document.createElement('h3');
  const releaseDate = document.createElement('p');
  const movieImg = document.createElement('img');
  const posterImg = document.createElement('img');
  const tagline = document.createElement('h4');
  const overview = document.createElement('p');
  const homepage = document.createElement('p');
  const factsContainer = document.createElement('div');
  const genresContainer = document.createElement('div');
  const runTime = document.createElement('p');
  const director = document.createElement('h6');

  movieDetailsContainer.append(movieDivContainer);
  movieDivContainer.classList.add('movieInfo');
  movieDivContainer.append(movieDiv,movieDiv2);
  movieDiv.append(posterImg );
  movieDiv2.append(movieHeader,tagline);
  movieDiv2.append(factsContainer);
  movieDiv2.append(director, overview, homepage, movieImg);

  fileSize = 'original'; 
  posterImg.src = imgScrBase+fileSize+movie.poster_path;

  factsContainer.append(releaseDate, genresContainer,runTime );
  factsContainer.classList.add('factsContainer');
  genresContainer.classList.add('genresContainer');

  movieHeader.innerText = movie.title;
  tagline.innerText = movie.tagline;
  
  overview.innerText =  movie.overview;
  homepage.innerText =  movie.homepage;
  releaseDate.innerText = movie.release_date;
  runTime.innerText = movie.runtime + ' minutes';
  
  
  const genresArray = movie.genres;
  for (const genre of genresArray){
    const genres = document.createElement('p');
    genresContainer.append(genres);
    genres.innerText = genre.name;
  }

  fileSize = 'w780'; 
  movieImg.src = imgScrBase+fileSize+movie.backdrop_path;

  /****** CAST & CREW ******/

  const castArray = movie.credits.cast;
  const crewArray = movie.credits.crew;

  for (const person of crewArray){
    if(person.job == 'Director'){
      director.innerText = 'Director: '+ person.name;
    }
  }

  
  const castDiv = document.createElement('div');
  const castHeader = document.createElement('h4');
  castHeader.innerText = 'Movie cast';
  movieDetailsContainer.append(castDiv);
  castDiv.classList.add('movieCast');

  const castContainer = document.createElement('div');
  const castContainer2 = document.createElement('div');
  castContainer.classList.add('castContainer');
  castContainer2.classList.add('castContainer2');

  // const castUl = document.createElement('ul');
  castDiv.append(castHeader, castContainer, castContainer2);
  // castContainer2.append(castUl);

  fileSize = 'w185';
  const nrOfMainActors = 4;

  for (const person of castArray.slice(0, nrOfMainActors)){
  // for (const person of mainActors){
    const personDiv = document.createElement('div');
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    castContainer.append(personDiv);
    personDiv.append(personImg, castNameDiv);
    castNameDiv.append(castName, characterName);

    personImg.src = imgScrBase+fileSize+person.profile_path;
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
  }

  for (const person of _.rest(castArray,nrOfMainActors )){
   
    const personDiv = document.createElement('div');
    const personli = document.createElement('li');
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    // castUl.append(personli);
    castContainer2.append(personDiv);
    castNameDiv.append(castName, characterName);

    personImg.src = imgScrBase+fileSize+person.profile_path;
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personDiv.innerText = person.name + ' - ' + person.character;
  }
}


function displayPersonDetails(movie){

  const movieDetails = document.querySelector('#movieDetails');
  hideElements(allSections);
  movieDetails.classList.remove("hide");

  const movieDetailsContainer = document.querySelector('#movieDetailsContainer');

  const movieDivContainer = document.createElement('div');
  const movieDiv = document.createElement('div');
  const movieDiv2 = document.createElement('div');
  const movieHeader = document.createElement('h3');
  const releaseDate = document.createElement('p');
  const movieImg = document.createElement('img');
  const posterImg = document.createElement('img');
  const tagline = document.createElement('h4');
  const overview = document.createElement('p');
  const homepage = document.createElement('p');
  const factsContainer = document.createElement('div');
  const genresContainer = document.createElement('div');
  const runTime = document.createElement('p');
  const director = document.createElement('h6');

  movieDetailsContainer.append(movieDivContainer);
  movieDivContainer.classList.add('movieInfo');
  movieDivContainer.append(movieDiv,movieDiv2);
  movieDiv.append(posterImg );
  movieDiv2.append(movieHeader,tagline);
  movieDiv2.append(factsContainer);
  movieDiv2.append(director, overview, homepage, movieImg);

  fileSize = 'original'; 
  posterImg.src = imgScrBase+fileSize+movie.poster_path;

  factsContainer.append(releaseDate, genresContainer,runTime );
  factsContainer.classList.add('factsContainer');
  genresContainer.classList.add('genresContainer');

  movieHeader.innerText = movie.title;
  tagline.innerText = movie.tagline;
  
  overview.innerText =  movie.overview;
  homepage.innerText =  movie.homepage;
  releaseDate.innerText = movie.release_date;
  runTime.innerText = movie.runtime + ' minutes';
  
  
  const genresArray = movie.genres;
  for (const genre of genresArray){
    const genres = document.createElement('p');
    genresContainer.append(genres);
    genres.innerText = genre.name;
  }

  fileSize = 'w780'; 
  movieImg.src = imgScrBase+fileSize+movie.backdrop_path;

  /****** CAST & CREW ******/

  const castArray = movie.credits.cast;
  const crewArray = movie.credits.crew;

  for (const person of crewArray){
    if(person.job == 'Director'){
      director.innerText = 'Director: '+ person.name;
    }
  }

  
  const castDiv = document.createElement('div');
  const castHeader = document.createElement('h4');
  castHeader.innerText = 'Movie cast';
  movieDetailsContainer.append(castDiv);
  castDiv.classList.add('movieCast');

  const castContainer = document.createElement('div');
  const castContainer2 = document.createElement('div');
  castContainer.classList.add('castContainer');
  castContainer2.classList.add('castContainer2');

  // const castUl = document.createElement('ul');
  castDiv.append(castHeader, castContainer, castContainer2);
  // castContainer2.append(castUl);

  fileSize = 'w185';
  const nrOfMainActors = 4;

  for (const person of castArray.slice(0, nrOfMainActors)){
  // for (const person of mainActors){
    const personDiv = document.createElement('div');
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    castContainer.append(personDiv);
    personDiv.append(personImg, castNameDiv);
    castNameDiv.append(castName, characterName);

    personImg.src = imgScrBase+fileSize+person.profile_path;
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
  }

  for (const person of _.rest(castArray,nrOfMainActors )){
   
    const personDiv = document.createElement('div');
    const personli = document.createElement('li');
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    // castUl.append(personli);
    castContainer2.append(personDiv);
    castNameDiv.append(castName, characterName);

    personImg.src = imgScrBase+fileSize+person.profile_path;
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personDiv.innerText = person.name + ' - ' + person.character;
  }
}



/*********************************
  Clear results 
**********************************/

function removePrevLists(){
  
  const movieListContainer = document.querySelector('#movieListContainer');
  movieListContainer.innerHTML = '';
 
  const resultContainer = document.querySelector('#resultContainer');
  resultContainer.innerHTML = '';

  const movieDetailsContainer = document.querySelector('#movieDetailsContainer');
  movieDetailsContainer.innerHTML = '';

}


/********************************************
   Error messages
*********************************************/

function displayError(error) {
  let message;
  const errorContainer = document.querySelector('#errorContainer');
  hideElements(allSections);
  errorContainer.classList.remove('hide');

  if (error === 404) { 
    message = 'No results found. Try again.';
  }
  else{ 
    message = 'Something went wrong, try again later.' 
  }
  
  const errorMessageHeader = document.querySelector('#errorMessage');
  errorMessageHeader.innerText = message;

}



export{topRatedBtnImg, popularBtnImg, displayMovieList, displayMovieorPerson,displayTrendingMovies, removePrevLists , displayMovieDetails, displayPersonDetails, displayError};

  

