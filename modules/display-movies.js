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
    const gridArticle = document.createElement('article');
    const startImg = document.createElement('img');
    startGrid.append(gridArticle);
    gridArticle.append(startImg);
    startImg.classList.add("startGridDiv");
    startImg.src = imgScrBase+fileSize+movie.poster_path;
    // startImg.setAttribute("id", movieId);
    gridArticle.setAttribute("id", movie.id);
  }
}


/*********************************
      Search results
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


  for (const movie of resultArray ){
    
    const resultArticle = document.createElement('article');
    resultContainer.append(resultArticle);
    const articleHeader = document.createElement('h3');
    const asideMovieHeader = document.createElement('h5');
    const articleImage = document.createElement('img'); 
    const articleDiv = document.createElement('div'); 
  
    resultArticle.append(articleHeader);
    resultArticle.append(articleDiv);
    articleDiv.append(articleImage);
    
    let articleHeaderTitle = '';
    let imgUrlPath = '';
  
    const id = movie.id;
    resultArticle.setAttribute("id", id);

    const mediaType = movie.media_type;
    
    if ((mediaType == 'movie')||(mediaType == 'tv')) {
      const movieId = movie.id;
      const releaseDate = document.createElement('p');
      const overview = document.createElement('p');
      imgUrlPath = movie.backdrop_path;
      fileSize = 'w1280';

      articleDiv.append(releaseDate, overview);

      articleHeaderTitle = movie.title;
      releaseDate.innerText = 'Release date: '+ movie.release_date;
      overview.innerText = movie.overview;

      if (mediaType == 'tv'){
        articleHeaderTitle = movie.name;
        releaseDate.innerText = 'First aired: ' + movie.first_air_date;
        resultArticle.classList.add("tvSeriesArticle");
      }
    }

    else if (mediaType == 'person'){
      const personId = movie.id;
      resultArticle.setAttribute("personid", personId);
      const knownForList = document.createElement('ul');
      const knownForHeader = document.createElement('h5');
      const knownForDepartment = document.createElement('div');
      const personInfo = document.createElement('div');
      resultArticle.append(personInfo);

      resultArticle.classList.add("personArticle");
      resultArticle.classList.add("personArticleSearch");
      
      fileSize = 'w185'; //w300
      imgUrlPath = movie.profile_path;
      articleHeaderTitle = movie.name;

      if (imgUrlPath == null){
        articleImage.src = './img/no-image.jpg';
      }

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
      Details - Movie
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
  homepage.innerHTML =  '<a href="'+movie.homepage+'">' + movie.homepage +'</a>';
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
  castDiv.append(castHeader, castContainer, castContainer2);
  
  fileSize = 'w185';
  const nrOfMainActors = 6;
  let imgUrlPathPerson = '';

  for (const person of castArray.slice(0, nrOfMainActors)){
    const personArticle = document.createElement('article');
    personArticle.classList.add("personArticle");
    
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    castContainer.append(personArticle);
    personArticle.append(personImg, castNameDiv);
    castNameDiv.append(castName, characterName);

    imgUrlPathPerson = person.profile_path;
    
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personImg.src = imgScrBase+fileSize+imgUrlPathPerson;

    if (imgUrlPathPerson == null){
      personImg.src = './img/no-image.jpg';
    }
    else{
      personImg.src = imgScrBase+fileSize+imgUrlPathPerson;
    }
    personArticle.setAttribute("id", person.id);
  }

  
  for (const person of _.rest(castArray,nrOfMainActors )){
   
    const personArticle = document.createElement('article');
    personArticle.classList.add("personArticle");
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    castContainer2.append(personArticle);
    castNameDiv.append(castName, characterName);
    personImg.src = imgScrBase+fileSize+person.profile_path;

    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personArticle.innerText = person.name + ' - ' + person.character;
    personArticle.setAttribute("id", person.id);
  }
}



/*********************************
      Details - TV
**********************************/


function displayTVDetails(tvSeries){

  const tvDetails = document.querySelector('#tvSeriesDetails');
  hideElements(allSections);
  tvDetails.classList.remove("hide");

  const tvDetailsContainer = document.querySelector('#tvSeriesDetailsContainer');

  const tvDivContainer = document.createElement('div');
  const tvDiv = document.createElement('div');
  const tvDiv2 = document.createElement('div');
  const tvHeader = document.createElement('h3');
  const firstAiredDate = document.createElement('p');
  const nrOfEpisodes = document.createElement('p');
  const nrOfSeasons = document.createElement('p');
  const seasonsEpisodes = document.createElement('p');
  const tvSeriesImg = document.createElement('img');
  const posterImg = document.createElement('img');
  const tagline = document.createElement('h4');
  const overview = document.createElement('p');
  const homepage = document.createElement('p');
  const factsContainer = document.createElement('div');
  const genresContainer = document.createElement('div');
  const runTime = document.createElement('p');
  const director = document.createElement('h6');

  tvDetailsContainer.append(tvDivContainer);
  tvDivContainer.classList.add('tvInfo');
  tvDivContainer.append(tvDiv,tvDiv2);
  tvDiv.append(posterImg);
  tvDiv2.append(tvHeader,tagline);
  tvDiv2.append(factsContainer);
  tvDiv2.append(overview, homepage,tvSeriesImg);
  tvDiv2.append(seasonsEpisodes, homepage,tvSeriesImg);

  fileSize = 'original'; 
  posterImg.src = imgScrBase+fileSize+tvSeries.poster_path;
  
  factsContainer.append(firstAiredDate, genresContainer, runTime );
  factsContainer.classList.add('factsContainer');
  genresContainer.classList.add('genresContainer');

  tvHeader.innerText = tvSeries.name;
  tagline.innerText = tvSeries.tagline;
  nrOfSeasons.innerText = 'Seasons: ' + tvSeries.number_of_seasons;
  nrOfEpisodes.innerText = 'Episodes: ' +  tvSeries.number_of_episodes;
  seasonsEpisodes.innerText = 'Seasons: ' + tvSeries.number_of_seasons + ' - Episodes: ' +  tvSeries.number_of_episodes;
  

  overview.innerText =  tvSeries.overview;
  homepage.innerText =  tvSeries.homepage;
  homepage.innerHTML =  '<a href="'+ tvSeries.homepage +'">' + tvSeries.homepage +'</a>';
  firstAiredDate.innerText = 'First aired: '+ tvSeries.first_air_date;
  runTime.innerText = tvSeries.episode_run_time + ' minutes/episode';
  
  tvSeriesImg.src = imgScrBase+fileSize+tvSeries.backdrop_path;

  const genresArray = tvSeries.genres;
  for (const genre of genresArray){
    const genres = document.createElement('p');
    genresContainer.append(genres);
    genres.innerText = genre.name;
  }

  
  /****** Cast ******/

  const castDiv = document.createElement('div');
  const castHeader = document.createElement('h4');
  castHeader.innerText = tvSeries.name + ' - cast';
  tvDetailsContainer.append(castDiv);
  castDiv.classList.add('movieCast');

  const castContainer = document.createElement('div');
  const castContainer2 = document.createElement('div');
  castContainer.classList.add('castContainer');
  castContainer2.classList.add('castContainer2');
  castDiv.append(castHeader, castContainer, castContainer2);


  const castArray = tvSeries.credits.cast;
  fileSize = 'w185';
  let imgUrlPathPerson = '';

  for (const person of castArray){
    const personArticle = document.createElement('article');
    personArticle.classList.add("personArticle");
    
    const personImg = document.createElement('img');
    const castNameDiv = document.createElement('div');
    const castName = document.createElement('h5');
    const characterName = document.createElement('p');

    castContainer.append(personArticle);
    personArticle.append(personImg, castNameDiv);
    castNameDiv.append(castName, characterName);

    imgUrlPathPerson = person.profile_path;
    
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personImg.src = imgScrBase+fileSize+imgUrlPathPerson;

    if (imgUrlPathPerson == null){
      personImg.src = './img/no-image.jpg';
    }
    else{
      personImg.src = imgScrBase+fileSize+imgUrlPathPerson;
    }
    personArticle.setAttribute("id", person.id);
  }

  /****** Seasons  ******/

  const seasons = tvSeries.seasons;
  const seasonsDiv = document.createElement('div');
  const seasonsHeader = document.createElement('h4');
  seasonsHeader.innerText = 'Seasons';
  tvDetailsContainer.append(seasonsDiv);
  seasonsDiv.classList.add('movieCast');

  const seasonContainer = document.createElement('div');
  seasonContainer.classList.add('castContainer');
  seasonsDiv.append(seasonsHeader, seasonContainer);
  
  fileSize = 'w185';
  let imgUrlPathSeason = '';
  for (const season of seasons){
    const seasonArticle = document.createElement('article');
    seasonArticle.classList.add("seasonArticle");
  
    const seasonImg = document.createElement('img');
    const seasonNameDiv = document.createElement('div');
    const seasonName = document.createElement('h5');
    const episodeCount = document.createElement('p');

    seasonContainer.append(seasonArticle);
    seasonArticle.append(seasonImg, seasonNameDiv);
    seasonNameDiv.append(seasonName, episodeCount);

    imgUrlPathSeason = season.poster_path;
    
    seasonName.innerText =  season.name;
    episodeCount.innerText = 'Episodes: ' + season.episode_count;
    seasonImg.src = imgScrBase+fileSize+imgUrlPathSeason;

    if (imgUrlPathSeason == null){
      seasonImg.src = './img/no-image.jpg';
    }
    else{
      seasonImg.src = imgScrBase+fileSize+imgUrlPathSeason;
    }
    // personDiv.setAttribute("id", person.id);
  }
}



/*********************************
      Details - Person
**********************************/

function displayPersonDetails(person){

  const personDetails= document.querySelector('#personDetails');
  hideElements(allSections);
  personDetails.classList.remove("hide");

  const personDetailsContainer = document.querySelector('#personDetailsContainer');
  const personDivContainer = document.createElement('div');
  const personDiv = document.createElement('div');
  const personDiv2 = document.createElement('div');
  const nameHeader = document.createElement('h3');
  const personImg = document.createElement('img');
  const factsDiv = document.createElement('div');
  const birthday = document.createElement('p');
  const placeOfBirth = document.createElement('p');
  const biography = document.createElement('p');
  const birthInfo = document.createElement('p');
  const department = document.createElement('h4');

  personDetailsContainer.append(personDivContainer);
  personDivContainer.classList.add('personInfo');
  personDivContainer.append(personDiv,personDiv2);
  personDiv.append(personImg );
  personDiv2.append(nameHeader, factsDiv);
  factsDiv.append(department, birthInfo);
  personDiv2.append(biography);

  fileSize = 'original'; 
  personImg.src = imgScrBase+fileSize+person.profile_path;
  nameHeader.innerText = person.name;
  department.innerText = 'Department: ' + person.known_for_department;
  birthday.innerText =  person.birthday;
  placeOfBirth.innerText = person.place_of_birth
  birthInfo.innerHTML = '<span class="medium">Born:</span> '+ person.birthday + '  |  ' + person.place_of_birth;
  biography.innerText =  person.biography;


 /*** Movie list */

  const moviesContainer = document.createElement('div');
  const movieListHeader = document.createElement('h4');
  personDetailsContainer.append(moviesContainer);
  moviesContainer.classList.add('moviesContainer');

  const movieListDiv = document.createElement('div');
  moviesContainer.append(movieListHeader, movieListDiv);
  movieListHeader.innerText = person.name + ' - Movies';
  movieListDiv.classList.add('movieslist');
  
  fileSize = 'w185';
  const acctorMovielist = person.movie_credits.cast;
  let imgUrlPath = '';

  for (const movie of acctorMovielist){
    const movieArticle = document.createElement('article');
    const movieImg = document.createElement('img');
    const movieName = document.createElement('h5');

    movieListDiv.append(movieArticle);
    movieArticle.append(movieImg, movieName);

    movieName.innerText = movie.original_title;
    imgUrlPath = movie.poster_path;
    fileSize = 'w185'; //w300

    if (imgUrlPath == null){
      movieImg.src = './img/no-image.jpg';
    }
    else{
      movieImg.src = imgScrBase+fileSize+imgUrlPath;
    }
    movieArticle.setAttribute("id", movie.id);
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

  const personDetailsContainer = document.querySelector('#personDetailsContainer');
  personDetailsContainer.innerHTML = '';

  const tvSeriesDetailsContainer = document.querySelector('#tvSeriesDetailsContainer');
  tvSeriesDetailsContainer.innerHTML = '';

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



export{topRatedBtnImg, popularBtnImg, displayMovieList, displayMovieorPerson,displayTrendingMovies, removePrevLists , displayMovieDetails, displayPersonDetails, displayTVDetails, displayError};

  

