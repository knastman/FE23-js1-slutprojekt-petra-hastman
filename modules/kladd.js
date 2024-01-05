
/********* 
------Tankar om extragrejer-----
****************/

// * movie-similiar i footern vid sökning?





// GLÖM INTE FIXA

// * Fler errormeddelanden


// ____



<article class="movie-card">
<h3>Taxi Driver</h3>
<p>Release date: 1976-02-09</p>
<img src="https://image.tmdb.org/t/p/original//6aoyUbvu0419XLKLIMoH0TkEicH.jpg" alt="" class="imgShadow"/>

<p>A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.</p>
<footer class="movie-card-footer">movie-card-footer</footer>
</article>
<article class="movie-card">
<h3 class="movieTitle">Léon: The Professional</h3>
<p class="releaseDate">Release date: 1994-09-14</p>
<img src="https://image.tmdb.org/t/p/original//jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg" alt="" class="imgShadow"/>

<p class="overview">Léon, the top hit man in New York, has earned a rep as an effective "cleaner". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.</p>
</article>



function displayMovieList(movies){

  // const movieListContainer = document.querySelector('#movieList div');
  // allSections.style.display = 'none';
  // movieListSection.style.display = 'block'; 
  // searchResult.style.display = 'none';
  // movieListHeader.style.display = 'block';
  hideElements(allSections);
  movieListSection.classList.remove("hide");

  const movieReults10 = movies.results.slice(0, 10);
  // console.log('antal i resultatet');
  // console.log(_.size(movies.results));
  
  for (const movie of movieReults10 ){
    const movieArticle = document.createElement('article');
    const movieHeader = document.createElement('h3');
    const movieImg = document.createElement('img');
    const releaseDate = document.createElement('p');
    
    // document.body.append(movieArticle);
    movieListContainer.append(movieArticle);
    movieArticle.append(movieHeader, movieImg, releaseDate);

    fileSize = 'w500';
    const imgUrl = imgScrBase+fileSize+movie.backdrop_path;

    movieHeader.innerText = movie.title;
    releaseDate.innerText = 'Release date: ' + movie.release_date;
    movieImg.src = imgUrl;
  }
}



const listAmount = 10; 
function displayMovieList(movies){
  hideElements(allSections);
  movieListSection.classList.remove("hide");

  const movieReults10 = movies.results.slice(0, listAmount);
  
  for (const movie of movieReults10 ){
    const movieArticle = document.createElement('article');
    const movieHeader = document.createElement('h3');
    const movieImg = document.createElement('img');
    const releaseDate = document.createElement('p');
    
    movieListContainer.append(movieArticle);
    movieArticle.append(movieHeader, movieImg, releaseDate);

    fileSize = 'w500';
    const imgUrl = imgScrBase+fileSize+movie.backdrop_path;

    movieHeader.innerText = movie.title;
    releaseDate.innerText = 'Release date: ' + movie.release_date;
    movieImg.src = imgUrl;
  }
}




// const listAmount = 10; 
// function displayMovieList(movies){
//   const movieListContainer = document.querySelector('#movieList div');
//   movieListHeader.style.display = 'block';

//   // for (let i=0; i<listAmount; i++ ){
//   for (let i=0; i<listAmount; i++ ){
//     const movieArticle = document.createElement('article');
//     const movieHeader = document.createElement('h3');
//     const movieImg = document.createElement('img');
//     const releaseDate = document.createElement('p');
    
//     // document.body.append(movieArticle);
//     movieListContainer.append(movieArticle);
//     movieArticle.append( movieHeader, movieImg, releaseDate);

//     fileSize = 'w500';
//     const imgUrl = imgScrBase+fileSize+movies.results[i].backdrop_path;

//     movieHeader.innerText = movies.results[i].title;
//     releaseDate.innerText = 'Release date: ' + movies.results[i].release_date;
//     movieImg.src = imgUrl;
//   }
// }


/******************************************************** */
/******************************************************** */


<div id="div3">
<img src="https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg" alt="" class=""/>
</div>   
<div id="div4">
<img src="https://image.tmdb.org/t/p/original/sRLC052ieEzkQs9dEtPMfFxYkej.jpg" alt="" class=""/>
</div>  



<!-- <img src="https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg" alt="" class="imgShadow"/>
<img src="https://image.tmdb.org/t/p/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg" alt="" class=""/>
<img src="https://image.tmdb.org/t/p/original//jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg" alt="" class=""/> -->
/******************************************************** */
/******************************************************** */
/******************************************************** */




<!-- <div id="imageleft">
<img src="https://image.tmdb.org/t/p/original//6aoyUbvu0419XLKLIMoH0TkEicH.jpg" alt="" class=""/>
</div>    
<div id="imageright">
<img src="https://image.tmdb.org/t/p/original/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg" alt="" class=""/>
</div>   
<div id="div1">
<img src="https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg" alt="" class=""/>
</div>
<div id="div2">
<img src="https://image.tmdb.org/t/p/original/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg" alt="" class=""/>
</div>         -->

#imageleft{
  background-color: deeppink;
  grid-area: imageleft; /* här definerar man*/

 }
#imageright{
  /* background-color:greenyellow; */
  grid-area: imageright; /* här sätter den var den bryter utifrån namnen som man defierat där uppe i body. Namnen i sig spelar inte roll i förhållande till htmlen*/

  /* display:flex;
  flex-direction: column;
  justify-content: space-between; */
  height:80%;

 }


#div1 {
  background-color: aqua;
  grid-area: div1;
  /* height:90%; */
 }
 #div2{
   background-color:chocolate;
   grid-area: div2;
   /* height:90%; */
  }
  /* #div3{
   background-color:darkgray;
   grid-area: div3;
   
  }
  #div4{
   background-color: coral;
   grid-area: div4;
  } */






/******************************************************** */
/******************************************************** */
/******************************************************** */  
//MINA ORGINAL SOM FIXATS TILL

// const divRatedMovies = document.querySelector('#movie-lists-choice');

// divRatedMovies.addEventListener('click', (event)=>{
//   removePrevLists()

//   let topOrpop = '';
//   if(event.target.id === 'buttonTopRated'){
//     console.log("You clicked buttonTopRated");
//     topOrpop = "top_rated";
//   }
//   else if(event.target.id === 'buttonPopular'){
//     console.log("You clicked buttonPopular");
//     topOrpop = "popular";
//   }
//   const movieListHeader = document.querySelector('#movieListHeader');
//   movieListHeader.innerText = event.target.getAttribute('name');
    
//   getMovieList(topOrpop)
//   .then (displayMovieList);

// })


  // console.log('movies result + result media typ');
  // console.log(movieOrPerson);
  // console.log(movieOrPerson.results);
  // console.log(movieOrPerson.total_pages);
  // console.log('movieOrPerson.page');


// function displayMovieorPerson (movieOrPerson){
//   console.log('movieOrPerson');
//   console.log(movieOrPerson);
//   console.log(movieOrPerson.results);
//   // console.log(movieOrPerson.results.length);
//   const mediaType = '';
//   for (let i=0; i<movieOrPerson.results.length; i++ ){
//         mediaType = movieOrPerson.results[i].media_type
//         console.log('mediaType');
//         console.log(mediaType);

//   }

//   if (mediaType == 'movie'){
//     displayMovies(movieOrPerson);
//   }
//   else if (mediaType == 'person'){
//     displayPerson(movieOrPerson);
//   }
//  }






// Senaste
// function displayMovieorPerson(movieOrPerson){  
//   console.log('movies result + result media typ');
//   console.log(movieOrPerson);
//   console.log(movieOrPerson.results);
//   // moviesContainer.innerText = 'Search result'
//   // searchResultHeader.style.display = 'block';

//   // fileSize = 'w1000';
//   fileSize = 'original';
//   for (let i=0; i<movieOrPerson.results.length; i++ ){
//     const mediaType = movieOrPerson.results[i].media_type
//     console.log(mediaType);


//     const movieArticle = document.createElement('article');
//     const movieHeader = document.createElement('h3');
//     const releaseDate = document.createElement('p');
//     const overview = document.createElement('p');

//     moviesContainer.append(movieArticle);

//     if (mediaType == 'movie'){
//       const imgUrlPath = movieOrPerson.results[i].backdrop_path;
//       if (imgUrlPath == null){
//         movieArticle.append( movieHeader, releaseDate, overview );
//       }
//       else{
//         const movieImg = document.createElement('img'); 
//         movieArticle.append( movieHeader, releaseDate, overview, movieImg );
//         movieImg.src = imgScrBase+fileSize+imgUrlPath;
//       } 
//       movieHeader.innerText = movieOrPerson.results[i].title;
//       releaseDate.innerText = movieOrPerson.results[i].release_date;
//       overview.innerText = movieOrPerson.results[i].overview;
//     }
//     else if (mediaType == 'person'){
//       const personImg = document.createElement('img');
//       const personHeader = document.createElement('h3');
//       const imgUrlPath = movieOrPerson.results[i].profile_path;  
//       movieHeader.innerText = movieOrPerson.results[i].name;
//       const imgUrl = imgScrBase+fileSize+imgUrlPath;
//       personImg.src = imgUrl; 

    
//       
// movieArticle.append( personHeader, personImg );
//     } 
//   }
// }


  // movieListSection.style.display = 'none';
  // searchResult.style.display = 'block';


// function displayMovieorPerson(movieOrPerson){  
//   // console.log('movies result + result media typ');
//   // console.log(movieOrPerson);
//   // console.log(movieOrPerson.results);
//   // console.log(movieOrPerson.total_pages);
//   // console.log('movieOrPerson.page');
//   fileSize = 'w300';
//   const resultArray = movieOrPerson.results;
//   const totalPages = movieOrPerson.total_pages;
//   const currentPage = movieOrPerson.page;

//   const nextButton = document.querySelector('#nextPage');
//   const prevButton = document.querySelector('#prevPage');
//   const pageButtons = document.querySelector('#pageButtons');
//   // pageButtons.classList.add("pageButtons");

//   if (currentPage<totalPages) {
//     nextButton.style.display = 'block';
//        // pageButtons.classList.add("pageButtons");
   
//     console.log('nextButton.value i ifsatsen');
//     console.log(nextButton.value);

//     nextButton.value = currentPage + 1;
 
//     console.log('nextButton.value i ifsatsen efter');
//     console.log(nextButton.value); 

//     if (currentPage>1) {
//       prevButton.style.display = 'block';
   
//       console.log('prevButton.value i ifsatsen');
//       console.log(prevButton.value);
  
//       prevButton.value = currentPage - 1;
   
//       console.log('prevButton.value i ifsatsen efter');
//       console.log(prevButton.value); 
         
//     }
//   }
  
//   else {
//     nextButton.style.display = 'none';
//   }

//   // if (currentPage>totalPages) {
//   //   prevButton.style.display = 'block';
//   //   console.log('prevButton.value i ifsatsen');
//   //   console.log(prevButton.value);

//   //   prevButton.value = currentPage - 1;
 
//   //   console.log('prevButton.value i ifsatsen efter');
//   //   console.log(prevButton.value); 
       
//   // }
//   // else {
//   //   prevButton.style.display = 'none';

//   // }




//   // let currentPage = movieOrPerson.page;
//   // const titlejArr = _.pluck(resultArray, 'title');
//   // console.log('nameObjArr pluck "title"');
//   // console.log(titlejArr);

//   const searchResultHeader = document.createElement('h2');
//   searchResultHeader.innerText = 'Search Results';
//   resultContainer.append(searchResultHeader);

//   fileSize = 'w300';
//   // fileSize = 'original';



   
//     for (let i=0; i<resultArray.length; i++ ){
//       const resultArticle = document.createElement('article');
//       resultContainer.append(resultArticle);

//       const articleHeader = document.createElement('h3');
//       const articleImage = document.createElement('img'); 
//       resultArticle.append(articleHeader, articleImage);
      
//       let articleHeaderTitle = '';
//       let imgUrlPath = '';
    
//       const mediaType = resultArray[i].media_type;
//       const movieId = resultArray[i].id;

//       if ((mediaType == 'movie')||(mediaType == 'tv')) {
//         const releaseDate = document.createElement('p');
//         const overview = document.createElement('p');
//         imgUrlPath = resultArray[i].backdrop_path;
//         fileSize = 'original';

//         resultArticle.append(releaseDate, overview);
      
//         articleHeaderTitle = resultArray[i].title;
//         releaseDate.innerText = 'Release date: '+ resultArray[i].release_date;
//         overview.innerText = resultArray[i].overview;

//         if (mediaType == 'tv'){
//           articleHeaderTitle = resultArray[i].name;
//           releaseDate.innerText = 'First aired: '+resultArray[i].first_air_date;
//         }
//       }

//       else if (mediaType == 'person'){
//         const knownForList = document.createElement('ul');
//         const knownForHeader = document.createElement('h4');
//         const knownForDepartment = document.createElement('p');
//         resultArticle.append(knownForDepartment);

//         fileSize = 'w300';
//         imgUrlPath = resultArray[i].profile_path;
//         articleHeaderTitle = resultArray[i].name;

//         knownForDepartment.innerText = 'Known for department: '+ resultArray[i].known_for_department;
        
//         const knownForArray = resultArray[i].known_for;
//         if (knownForArray != null){
//           resultArticle.append( knownForHeader, knownForList);
//           knownForHeader.innerText = 'Known for'
//           for (let j=0; j<knownForArray.length; j++ ){
//             const liKnownFor = document.createElement('li');
//             const mediatype = knownForArray[j].media_type;
//             knownForList.append(liKnownFor);
//             if (mediatype == 'tv'){
//               liKnownFor.innerText = 'Tv: ' + knownForArray[j].name;
//             } 
//             else if (mediatype == 'movie'){
//               liKnownFor.innerText = 'Movie: '+ knownForArray[j].title;
//             }
//           } 
//         } 

//       } 
//       if (imgUrlPath != null){
//         articleImage.src = imgScrBase+fileSize+imgUrlPath; 
//       }

//       articleHeader.innerText = articleHeaderTitle;
     

//       const mediaTypeP = document.createElement('p');
//       resultArticle.append(mediaTypeP);
//       mediaTypeP.innerText = mediaType + movieId;
  
//     }//Stora forsatsen slut

  
// }






// for (let currentPage=1; currentPage<totalPages.length; currentPage++ ){ }

      // if (imgUrlPath == null){
      //   movieArticle.append( movieHeader, releaseDate, overview, mediaTypeP );
      // }
      // else{
      //   const movieImg = document.createElement('img'); 
      //   movieArticle.append( movieHeader, releaseDate, overview, movieImg, mediaTypeP );
      //   movieImg.src = imgScrBase+fileSize+imgUrlPath;
      // } 

      // articleImage.src = imgScrBase+fileSize+imgUrlPath;

// function displayPerson(person){  
//   console.log('person');
//   console.log(person.results);
//   fileSize = 'w300';

//   const searchResultHeader = document.createElement('h2');
//   searchResultHeader.innerText = 'Search Result';
//   moviesContainer.append(searchResultHeader);
 

//   for (let i=0; i<person.results.length; i++ ){  
//     const movieArticle = document.createElement('article');
//     const personHeader = document.createElement('h3');
//     const knownForDepartment = document.createElement('p');
//     const knownForList = document.createElement('ul');
//     const knownForHeader = document.createElement('h4');
//     moviesContainer.append(movieArticle);

//     const imgUrlPath = person.results[i].profile_path;

//     if (imgUrlPath == null){
//       movieArticle.append( personHeader, knownForDepartment);
//     }
//     else{
//       const personImg = document.createElement('img');
//       const imgUrl = imgScrBase+fileSize+imgUrlPath;
//       movieArticle.append( personHeader, personImg, knownForDepartment);
//       // knownForList.append(liKnownFor)
//       personImg.src = imgUrl;   
//     }

//     // for (let i=0; i<person.results.length; i++ ){
//     //   famousForList.append(liMovie);
//     // }  
//     personHeader.innerText = person.results[i].name;
//     knownForDepartment.innerText = 'Known for department: '+ person.results[i].known_for_department;
//     // knownForList.innerText = person.results[i].known_for;
//     // console.log('known_for');
//     // console.log(person.results[i].known_for);

//     const knownForArray = person.results[i].known_for;
//     if (knownForArray != null){
//       movieArticle.append( knownForHeader, knownForList);
//       knownForHeader.innerText = 'Known for'
//       for (let j=0; j<knownForArray.length; j++ ){
//         const liKnownFor = document.createElement('li');
//         const mediatype = knownForArray[j].media_type;
//         knownForList.append(liKnownFor);
//         if (mediatype == 'tv'){
//           liKnownFor.innerText = 'Tv: ' + knownForArray[j].name;
//         } 
//         else //if (mediatype == 'movie'){
//           liKnownFor.innerText = 'Movie: '+ knownForArray[j].title;
//         }
//     } 
//   }
// }

// function displayMovies(movies){  
//   // fileSize = 'w1000';
//   for (let i=0; i<movies.results.length; i++ ){
//     const movieArticle = document.createElement('article');
//     const movieHeader = document.createElement('h3');
//     const releaseDate = document.createElement('p');
//     const overview = document.createElement('p');

//     moviesContainer.append(movieArticle);

//     const imgUrlPath = movies.results[i].backdrop_path;

//     if (imgUrlPath == null){
//       movieArticle.append( movieHeader, releaseDate, overview );
//     }
//     else{
//       const movieImg = document.createElement('img'); 
//       movieArticle.append( movieHeader, releaseDate, overview, movieImg );
//       movieImg.src = imgScrBase+fileSize+imgUrlPath;
//     } 
//     movieHeader.innerText = movies.results[i].title;
//     releaseDate.innerText = movies.results[i].release_date;
//     overview.innerText = movies.results[i].overview;
  
//   }
// }









//Lite kladd kring att försöka få till bilden

/*********************************
 Get picture from top rated for button-background
**********************************/

// let buttonId = document.querySelector(id);
// console.log(topOrpop);
// console.log(id);
// console.log(buttonId);
// if (id == '#buttonTopRated'){
//   console.log('ifsatsen top');
//   topOrpop = 'buttonTopRated';
// }
// else if (id == '#buttonPopular'){
//   console.log('ifsatsen pop');
//   topOrpop = 'buttonPopular';
// }



// getTopRatedMovies()
//     .then (displayButtonImg);
// getPopularMovies()
//     .then (displayButtonImg);
// getMovieList(topOrpop)
//   .then (displayButtonImg);




// const buttonTopRated = document.querySelector('#buttonTopRated');
// const buttonPopular = document.querySelector('#buttonPopular');

// let topOrpop = 'buttonTopRated';



///INFO**********'

//Timkod i fetch-movie-list
  //Dessa är samma som de två raderna nedan
  // const promise = fetch(url, options);
  // const response = await promise;

  // const response = await fetch(url, options);


/****** */












  // const movies10 = movies.results.slice(0, listAmount);
  // console.log(movies10);








  /****BORTKLIPPT OSV */

//   <!-- <div id="movie-lists-choice">
//   <button id="buttonTopRated" value ="buttonTopRated" name="Top rated movies">Top rated movies</button>

//   <button id="buttonPopular" value="buttonPopular" name="Popular movies">Popular movies</button>
// </div>  -->

//   <!-- <article>
//   <h3>Lock, Stock and Two Smoking Barrels</h3>
//   <img src="https://image.tmdb.org/t/p/original/cXQH2u7wUIX1eoIdEj51kHXoWhX.jpg" alt="" class="imgShadow"/>
//   <p class="releaseDate">Release date: 1998-08-28</p>
// </article> -->




  //GÖR DENNA TILL RANDOM SEN OM DET HINNS
  // const buttonTopRated = document.querySelector('#buttonTopRated')
  // function displayButtonImg(movieArray){  
  //   // console.log('movieArray i display img');
  //   // console.log(movieArray);

  //   const buttonTopRated = document.querySelector('#buttonTopRated')
    
  //   // let topOrpopButton = '';

  //   // if(topOrPopChoice == 'buttonTopRated') {
  //   //    topOrpop = '#buttonTopRated';
  //   // }
  //   // else if (topOrPopChoice == 'buttonPopular'){
  //   //    topOrpop = '#buttonPopular';
  //   // }
  //   // let button = document.querySelector(topOrpopButton);

  //   console.log('movieArray vilken nedan');
  //   console.log(movieArray);
  //   const imgScrBase = 'https://image.tmdb.org/t/p/original/';

  //   // const button = document.querySelector('#buttonTopRated');
    
  //   button.style.backgroundImage = 'url('+imgScrBase+movieArray.results[0].backdrop_path;
  //   // buttonPopular.style.backgroundImage = 'url('+imgScrBase+movieArray.results[0].backdrop_path;
  // }


  // const randomMovieIndex = Math.floor( Math.random() * listAmount); //orginal fast var med round istället för floor
  // const randomMovieIndex = Math.floor( _.random(0, listAmount-1)); //med underscore och listanount
  // const randomMovieIndex = Math.floor( _.random(0, 9)); //med underscore 



  // const buttonPopular = document.querySelector('#buttonPopular');
  // // console.log('buttonPopular');
  // // console.log(buttonPopular);

  // function displayButtonImg(movieArray){  
  //   console.log(movieArray);
  //   const imgScrBase = 'https://image.tmdb.org/t/p/original/';
  //   // buttonPopular.src = imgScrBase+movieArray.results[0].backdrop_path;
  //   buttonPopular.style.backgroundImage = 'url('+imgScrBase+movieArray.results[0].backdrop_path;
    
  // }


  //  element.style.backgroundImage = 'url('+imgSrc+')';
// function setPopImage(movies){


//   const imgScrBase = 'https://image.tmdb.org/t/p/original/';
//   movieImg.src = imgScrBase+movies.results[0].backdrop_path;

// }



  // const buttonTopRated = document.querySelector('#buttonTopRated');
  // console.log(buttonTopRated);

  // function displayButtonImg(movieArray){  
  //   console.log(movieArray);
  //   const imgScrBase = 'https://image.tmdb.org/t/p/original/';
  //   // buttonPopular.src = imgScrBase+movieArray.results[0].backdrop_path;
  //   buttonTopRated.style.backgroundImage = 'url('+imgScrBase+movieArray.results[0].backdrop_path;
  // }



  




  // async function getTopRatedMovies(){
//   const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//   console.log('url');
//   console.log(url);
  
//   const response = await fetch(url, options);
//   console.log(response);

//   if(response.ok){ 
//     const data = await response.json();
//     console.log('data nedan');
//     console.log(data);
//     return data;
//   }
//   else if(response.status === 404){ 
//     throw 404
//   }
//   else throw 'error';

// }



// document.addEventListener("click", function(event) {
//   // check which link was clicked using the event.target.id property
//   let topOrpop = '';
  
//   switch (event.target.id) {
//     case "buttonTopRated":
//       console.log("You clicked buttonTopRated");
//       topOrpop = "buttonTopRated";
//       break;
//     case "buttonPopular":
//       console.log("You clicked buttonPopular");
//       topOrpop = "buttonPopular";
//       break;
//     default:
//       break;
//   }

//   getMovieList(topOrpop)
//   .then (displayMovieList);
// });


// document.addEventListener("click", function(event) {
//   // check which link was clicked using the event.target.id property
//   let topOrpop = '';
  
//   switch (event.target.id) {
//     case "buttonTopRated":
//       console.log("You clicked buttonTopRated");
//       topOrpop = "buttonTopRated";
//       break;
//     case "buttonPopular":
//       console.log("You clicked buttonPopular");
//       topOrpop = "buttonPopular";
//       break;
//     default:
//       break;
//   }

//   getMovieList(topOrpop)
//   .then (displayMovieList);
// });



// let topOrpop = 'buttonTopRated';
// let id= '';
// if (document.querySelector(id) == '#buttonTopRated'){
//   console.log('ifsatsen top');
//   topOrpop = 'buttonTopRated';
// }
// else if (document.querySelector(id) == '#buttonPopular'){
//   console.log('ifsatsen pop');
//   topOrpop = 'buttonPopular';
// }


// let buttonTopOrPop = document.querySelectorAll('#ratedMovies > button');
// console.log('buttonTopOrPop rätt?');
// console.log(buttonTopOrPop);


/*********************************
 Get Top rated or Popular movies
**********************************/

// const buttonTopRated = document.querySelector('#buttonTopRated');
// const buttonPopular = document.querySelector('#buttonPopular');
// let buttonTopOrPop = document.querySelectorAll('#ratedMovies > button');
// // console.log('buttonTopOrPop rätt?');
// // console.log(buttonTopOrPop);



/*********************************
 Get Top rated(popular) movies
**********************************/

// getTopRatedMovies()
//     .then (displayMovieList);
    // .then(response => console.log(response))
    // .catch(err => console.error('error:' + err));



/// TIMKOD
//window.addEventListener('click', async ()=>{ //samma fast med arrowfunk


//Funktionen ovan bör egentligen vara async (och därmed await som nedan)
// async function onPageLoad(){

//   await getMovieList('top_rated')
//   .then (setTopImage);

//   await getMovieList('popular')
//   .then (setPopImage);

// }



// function displayMovieList(movies){
//   movieListHeader.style.display = 'block';
//   // const movieListHeader = document.querySelector('#movieListHeader');
//   // movieListHeader.innerText = 'Top rated movies';
//   // movieListHeader.innerText = 'Popular movies';

//   // console.log('movies i display');
//   // console.log(movies);
//   // console.log(movies.results);
//   // console.log(movies.url);

//   const listAmount = 10; 

//   for (let i=0; i<listAmount; i++ ){
//       const movieArticle = document.createElement('article');
//       const movieHeader = document.createElement('h3');
//       const movieImg = document.createElement('img');
//       const releaseDate = document.createElement('p');
//       // const imgScrBase = 'https://image.tmdb.org/t/p/original/';
      
//       // document.body.append(movieArticle);
//       movieListContainer.append(movieArticle);
//       movieArticle.append( movieHeader, movieImg, releaseDate);

//       movieHeader.innerText = movies.results[i].title;
//       releaseDate.innerText = movies.results[i].release_date;
//       movieImg.src = imgScrBase+movies.results[i].backdrop_path;

//     }
// }



// function setButtonBgImage(movies, element) {
//   // const imgScrBase = 'https://image.tmdb.org/t/p/original/';
//   const movieImgSrc = movies.results[0].backdrop_path;
//   const imgSrc = imgScrBase+movieImgSrc;
//   // element.src = imgScrBase+movies.results[0].backdrop_path;
//   element.style.backgroundImage = `url(${imgSrc})`;
//   element.style.backgroundImage = `url(${imgScrBase}${movieImgSrc})`;
//   // movieImg.src = imgScrBase+movieArray.results[i].backdrop_path;

// }


const movieItem = document.querySelectorAll('article');

 for (let i = 0; i < movieItem.length; i++) {
      movieItem[i].addEventListener('click', getMovieDetails); 
      console.log('movieItems ');
      console.log(movieItem[i]);
 }

movieArticle.addEventListener('click', getMovieDetails);


// FRÅN FETCH crossOriginIsolated

// async function getMovieList(topOrpop){
//   // console.log(topOrpop);
  
//   // let topOrpop = '';

//   // if(topOrPopChoice == 'buttonTopRated') {
//   //    topOrpop = 'top_rated';
//   // }
//   // else if (topOrPopChoice == 'buttonPopular'){
//   //    topOrpop = 'popular';
//   // }
//   const url =`https://api.themoviedb.org/3/movie/${topOrpop}?language=en-US`;


//   const response = await fetch(url, options);
//   console.log(response);

//   if(response.ok){ 
//     const data = await response.json();
//     // console.log('data nedan');
//     console.log(data);
//     return data;

//   }
//   else if(response.status === 404){ 
//     throw 404
//   }
//   else throw 'error';
// }



function setButtonBgImage(movies, element) {
  // console.log('movies i set buttonbg length: ');
  // console.log(movies.results.length);
  // const randomMovieListIndex = Math.round( Math.random()*(movies.results.length-1) );
  const randomMovieListIndex10 = Math.round( Math.random() * 10 );
  // console.log('randomNameIndex');
  // console.log(randomMovieListIndex10);
  // const movieImgSrc = movies.results[0].backdrop_path;
  const movieImgSrcRandom = movies.results[randomMovieListIndex10].backdrop_path;
  element.style.backgroundImage = `url(${imgScrBase}${fileSize}${movieImgSrcRandom})`;
};

// const imgUrl = `${imgScrBase}${fileSize}${imgUrlPath}`;


// import {setButtonBgImage, displayMovieList, displayMovies, removePrevLists} from './modules/display-movies.js'; 


/*
FRÅGA TIM:
* Hämta bild till toplistorna utan event? Går det göra på ngt vettigt sätt? Dumt?  Randomisera bara bilderna på ngt sätt?
* Andra idéer om "extragrejer" ev


* Hur gör man om ett resultat inte skickar ngn bild, det står "null" i consolen

if (movieArray.results[i].backdrop_path == null){
  movieArticle.append( movieHeader, releaseDate, overview );
}
else{
  movieArticle.append( movieHeader, releaseDate, overview, movieImg );

}


  // const url =`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_keywords=${keywords}`;
  // const urlMovieSearch =`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    
  // const url =`https://api.themoviedb.org/3/search/person?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
  // const url =`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false`;


NYTT

* pagination
* img error
* 

*/


  // const randomMovieListIndex = Math.round( Math.random()*(movies.results.length-1) );







<div class="search">
  <form>
    <input type="text" class="searchTerm" placeholder="What are you looking for?">
    <button type="submit" class="searchButton">
      <i class="fa fa-search"></i>
    </button>
  </form>
</div>



/***** Searchbox alternative ****/
.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 1px solid #ccdee1;
  border-right: none;
  padding: 5px;
  height: 35px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 40px;
  height: 35px;
  border: 1px solid #ccdee1;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

// const url =`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  // const url =`https://api.themoviedb.org/3/movie/${movieId}credits?language=en-US`;

<section id="movieDetails">
        <div id="movieDetailsContainer">
          <div class="movieInfo">
            <div>
              <img src="https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" />
            </div>
            <div>
              <h3>Wonka</h3>
              <h4>Every good thing in this world started with a dream.</h4>
              <p>
                Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.</p>
              
              <p>https://www.wonkamovie.com</p>
            </div>
          </div>
          <div class="movieCast">
            <h4>Movie cast</h4>
            <div class="castContainer">
              <div>
                <img src="https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg">
                <div>
                  <h5>Timothée Chalamet</h5>
                  <p>"Willy Wonka"</p>
                </div>
              </div>
              <div>
                <img src="https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg">
                <h5>Timothée Chalamet</h5>
                <p>Willy Wonka"</p>
              </div>
              <div>  
                <img src="https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg">
                <h5>Timothée Chalamet</h5>
                <p>Willy Wonka"</p>
              </div>

            </div>
          </div>


        </div>
      </section>


      // const buttonTopRated = document.querySelector('#buttonTopRated');
// const buttonPopular = document.querySelector('#buttonPopular');