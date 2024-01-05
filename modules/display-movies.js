const allSections = document.querySelectorAll('section');
// const mainAside = document.querySelector('#mainAside');

const imgScrBase = 'https://image.tmdb.org/t/p/';
let fileSize = 'original'; 
const listAmount = 10; 



/*********************************
  Hide sections  
**********************************/

function hideElements(array){
  // element.forEach((id) => id.style.display = 'none'); //FUNGERAR
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
  const randomMovieIndex = Math.floor( _.random(0, (listAmount-1))); 
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

  for (const movie of movies.results.slice(0, listAmount) ){
    const movieArticle = document.createElement('article');
    const movieHeader = document.createElement('h3');
    const movieImg = document.createElement('img');
    const releaseDate = document.createElement('p');
    const detailsButton = document.createElement('button');
    
    
    movieListContainer.append(movieArticle);
    movieArticle.append(movieImg, movieHeader,releaseDate, detailsButton);
    
    fileSize = 'w185';
    // const imgUrl = imgScrBase+fileSize+movie.backdrop_path;
    movieArticle.setAttribute("id", movie.id);

    movieHeader.innerText = movie.title;
    releaseDate.innerText = 'Release date: ' + movie.release_date;
    // movieImg.src = imgScrBase+fileSize+movie.backdrop_path;
    movieImg.src = imgScrBase+fileSize+movie.poster_path;
    
    // movieArticle.classList.add('details');
    // movieImg.setAttribute("id", movie.id);

    detailsButton.classList.add('details');
    detailsButton.innerText = 'More info >>';
    detailsButton.setAttribute("id", movie.id);
  }
}


/*********************************
Tredning movies (for startpage)
**********************************/


function displayTrendingMovies(movies){
  console.log(movies.results);
  const startGrid = document.querySelector("#startGrid");
  // hideElements(allSections);
  // startSection.classList.remove("hide");
  fileSize = 'w500';

  for (const movie of _.shuffle(movies.results) ){
    const movieId = movie.id;
    // console.log(movieId);
    const gridDiv = document.createElement('div');
    const startImg = document.createElement('img');
    startGrid.append(gridDiv);
    gridDiv.append(startImg);
    

    startImg.src = imgScrBase+fileSize+movie.poster_path;
    startImg.classList.add('detailsClick');
    startImg.setAttribute("id", movieId);
    
    // const imgUrl = movies.results[randomMovieIndex].backdrop_path;
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
  // const pageButtons = document.querySelector('#pageButtons');
  // pageButtons.classList.add("pageButtons");

  if (currentPage<totalPages) {
    nextButton.style.display = 'block';
    nextButton.classList.remove("faded");
    prevButton.style.display = 'block';
    prevButton.classList.add("faded");

    nextButton.value = currentPage + 1;

    if (currentPage>1) {
      // prevButton.style.display = 'block';
      prevButton.classList.remove("faded")
      prevButton.value = currentPage - 1;
    }
    else if (currentPage==1) {
      // prevButton.style.display = 'none';
      prevButton.classList.add("faded");
    }
  }
  else if (currentPage==totalPages){
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
  }
  else {
    // nextButton.style.display = 'none';
    nextButton.classList.add("faded");
  }

  // const searchResultHeader = document.createElement('h2');
  // searchResultHeader.innerText = 'Search Results';
  // resultContainer.append(searchResultHeader);
  const flexContainer = document.createElement('div');
  // resultContainer.append(flexContainer);

  for (const movie of resultArray ){
    const resultArticle = document.createElement('article');
    resultContainer.append(resultArticle);

    const articleHeader = document.createElement('h3');
    const asideMovieHeader = document.createElement('h5');
    const articleImage = document.createElement('img'); 
    const articleDiv = document.createElement('div'); 
    resultArticle.append(articleDiv);
    articleDiv.append(articleHeader, articleImage);
    
    let articleHeaderTitle = '';
    let imgUrlPath = '';
    // let asideMovieHeaderTitle = '';
  
    const mediaType = movie.media_type;
    const movieId = movie.id;
    
    
    if ((mediaType == 'movie')||(mediaType == 'tv')) {
      const releaseDate = document.createElement('p');
      const overview = document.createElement('p');
      const detailsButton = document.createElement('button');
      imgUrlPath = movie.backdrop_path;
      fileSize = 'w1280';

      articleDiv.append(releaseDate, overview, detailsButton);
      resultArticle.append(detailsButton);
      resultArticle.setAttribute("id", movieId);

      articleHeaderTitle = movie.title;
      releaseDate.innerText = 'Release date: '+ movie.release_date;
      overview.innerText = movie.overview;
      
      detailsButton.classList.add('details');
      detailsButton.innerText = 'More info >>';
      detailsButton.setAttribute("id", movieId);
      
      // mainAside.append(asideMovieHeader);
      // asideMovieHeader.innerText= movie.title;

      if (mediaType == 'tv'){
        articleHeaderTitle = movie.name;
        releaseDate.innerText = 'First aired: ' + movie.first_air_date;
      }
    }

    else if (mediaType == 'person'){
      const knownForList = document.createElement('ul');
      const knownForHeader = document.createElement('h4');
      const knownForDepartment = document.createElement('p');
      const personInfo = document.createElement('div');
      // resultArticle.append(knownForDepartment);
      resultArticle.append(personInfo);
      

      fileSize = 'w300';
      imgUrlPath = movie.profile_path;
      articleHeaderTitle = movie.name;

      personInfo.append(knownForDepartment);
      knownForDepartment.innerText = 'Known for department: '+ movie.known_for_department;
      const knownForArray = movie.known_for;
      
      if (knownForArray != null){
        personInfo.append( knownForHeader, knownForList);
        knownForHeader.innerText = 'Known for'
        for (const movieOrTv of knownForArray ){  
          const liKnownFor = document.createElement('li');
          const mediatype = movieOrTv.media_type;
          knownForList.append(liKnownFor);
          if (mediatype == 'tv'){
            liKnownFor.innerText = 'Tv: ' + movieOrTv.name;
          } 
          else if (mediatype == 'movie'){
            liKnownFor.innerText = 'Movie: '+ movieOrTv.title;
          }
        } 
      } 

    } 
    if (imgUrlPath != null){
      articleImage.src = imgScrBase+fileSize+imgUrlPath; 
    }

   
    articleHeader.innerText = articleHeaderTitle;
    
    const mediaTypeP = document.createElement('p');
    // resultArticle.append(mediaTypeP);
    // mediaTypeP.innerText = mediaType +' ' + movieId;

  }//Stora forsatsen slut
}

          function toHoursAndMinutes(totalMinutes) {
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            return { hours, minutes };
          }




function displayMovieDetails(movie){
  // console.log(movie);
  // console.log(toHoursAndMinutes(117));
 
  // const pageButtons = document.querySelector('#pageButtons');
  // pageButtons.style.display = 'none';
  
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
  
  const castDiv = document.createElement('div');
  const castHeader = document.createElement('h4');
  const director = document.createElement('h6');
  // const div = document.createElement('div');
  // const h5 = document.createElement('h5');

  movieDetailsContainer.append(movieDivContainer);
  movieDivContainer.classList.add('movieInfo');
  movieDivContainer.append(movieDiv,movieDiv2);
  movieDiv.append(posterImg );
  movieDiv2.append(movieHeader,tagline);
  movieDiv2.append(factsContainer);
  movieDiv2.append(director, overview, homepage, movieImg);

  fileSize = 'w780'; 
  movieImg.src = imgScrBase+fileSize+movie.backdrop_path;

  fileSize = 'original'; 
  posterImg.src = imgScrBase+fileSize+movie.poster_path;


  const castArray = movie.credits.cast;
  const crewArray = movie.credits.crew;
  // console.log(crewArray);
  for (const person of crewArray){
    
    // console.log('person');
    // console.log(person);
    // console.log(person.job);

    if(person.job == 'Director'){
      console.log(person);
      console.log('director i ifsatsen');
      console.log(person.name);
      director.innerText = 'Director: '+ person.name;
      
    }
  }


  factsContainer.append(releaseDate, genresContainer,runTime );
  factsContainer.classList.add('factsContainer');
  genresContainer.classList.add('genresContainer');

  const genresArray = movie.genres;
  console.log(genresArray);

  movieHeader.innerText = movie.title;
  tagline.innerText = movie.tagline;
  // h5.innerText = 'Release date';
  
 
  overview.innerText =  movie.overview;
  homepage.innerText =  movie.homepage;
  releaseDate.innerText = movie.release_date;
  runTime.innerText = movie.runtime + ' minutes';
  

  // const runtimeInHoursMinutes = toHoursAndMinutes(movie.runtime);
  // const runtimeHours = _.pluck(runtimeInHoursMinutes, 'hours'); 
  // const runtimeMinutes = _.pluck(runtimeInHoursMinutes, 'minutes'); 

  // console.log('runtimeInHoursMinutes');
  // console.log(runtimeInHoursMinutes);
  // console.log('runtimeHours');
  // console.log(runtimeHours);
  // console.log('runtimeMinutes');
  // console.log(runtimeMinutes);

  for (const genre of genresArray){
    const genres = document.createElement('p');
    genresContainer.append(genres);
    genres.innerText = genre.name;
  }


  // homepage.innerHtml = '<h5>Homepage:</h5> movie.homepage';



  /****** CAST ***** */

  movieDetailsContainer.append(castDiv);
  castDiv.classList.add('movieCast');
  const castContainer = document.createElement('div');
  const castContainer2 = document.createElement('div');
  castContainer.classList.add('castContainer');
  castContainer2.classList.add('castContainer2');

  const castUl = document.createElement('ul');
  castDiv.append(castHeader, castContainer, castContainer2);
  castContainer2.append(castUl);

  castHeader.innerText = 'Movie cast';

  // castDiv.append(divCointenerRest);
  // divCointenerRest.classList.add('divCointenerRest');

  // fileSize = 'w500';
  // const imgUrl = imgScrBase+fileSize+movie.backdrop_path;
  // movieArticle.setAttribute("id", movie.id);



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

    castUl.append(personli);
    castNameDiv.append(castName, characterName);

    personImg.src = imgScrBase+fileSize+person.profile_path;
    castName.innerText =  person.name;
    characterName.innerText =  person.character;
    personli.innerText = person.name + ' - ' + person.character;
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
  
  // movieListHeader.style.display = 'none';

  // const errorContainer = document.querySelector('#errorContainer');
  // errorContainer.classList.add('hide');
}


/********************************************
   Error
*********************************************/

function displayError(error) {
  console.log('errormeddelande');
  console.log(error);
  let message;

  const errorContainer = document.querySelector('#errorContainer');
  hideElements(allSections);
  errorContainer.classList.remove('hide');
  // const h3ErrorMess = document.createElement('h3');

  if (error === 404) { 
    message = 'No search results found. Try another query.';
  }
  else{ 
    message = 'Something went wrong, try again later.' 
  }
  
  const errorMessageHeader = document.querySelector('#errorMessage');
  errorMessageHeader.innerText = message;

}


/*********************************
    Exports
**********************************/

  export{topRatedBtnImg, popularBtnImg, displayMovieList, displayMovieorPerson,displayTrendingMovies, removePrevLists , displayMovieDetails, displayError};
  // export{setButtonBgImage, displayMovieList, displayMovies, removePrevLists};
  


  // function createAndAppendElement(type, content, container){
  //   const el = document.createElement(type);
  //   container.append(el);
  
  //   if(type === 'img') el.src = content;
  //   else el.innerText = content;
  
  //   return el;
  // }

  // function topOrpopularChosen(ratedChoice){
  //   const buttonChoice = document.querySelector(ratedChoice);
  //   return buttonChoice;
  // }



  // for (let i=0; i<movieArray.results.length; i++ ){
  //   const movieArticle = document.createElement('article');
  //   const movieHeader = document.createElement('h3');
  //   const movieImg = document.createElement('img');
  //   const releaseDate = document.createElement('p');
  //   const imgScrBase = 'https://image.tmdb.org/t/p/original/';
    
  //   // document.body.append(movieArticle);
  //   moviesContainer.append(movieArticle);
  //   movieArticle.append( movieHeader, movieImg, releaseDate);

  //   movieHeader.innerText = movieArray.results[i].original_title;
  //   movieImg.src = imgScrBase+movieArray.results[i].backdrop_path;
  //   releaseDate.innerText = movieArray.results[i].release_date;

  // }



/********
 EXTRA EVENTUELLT
 ********/


//  function displayMovie(movieId){


//  }



  /************FUNKAR EJ******** */

  // for (const movie of movies){  
  //   const movieArticle = document.createElement('article');
  //   const movieHeader = document.createElement('h3');
  //   const movieImg = document.createElement('img');
  //   const releaseDate = document.createElement('p');
  //   const imgScrBase = 'https://image.tmdb.org/t/p/original/';
    
  //   // document.body.append(movieArticle);
  //   movieListContainer.append(movieArticle);
  //   movieArticle.append( movieHeader, movieImg, releaseDate);

  //   movieHeader.innerText = movies.result[i].title;
  //   movieImg.src = imgScrBase+movies.movie[i].backdrop_path;
  //   releaseDate.innerText = movies.movie[i].release_date;

  // }




    // const mainActors =  creditsArray.slice(0, nrOfMainActors);
  // console.log('mainActors 3');
  // console.log(mainActors);
  // const restOfActors =_.rest(creditsArray,nrOfMainActors );
  // console.log('rest');
  // console.log(restOfActors);