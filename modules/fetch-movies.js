
const BAERER_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjQ0ZGYyYjllNDc2ODI3Y2U4OTAzNTc2MzFhYjY2NyIsInN1YiI6IjY1ODAwNWI4ZGY4NmE4MDhmOWU3ZDNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AnTk_Ta_Mh11cWGYDQHGLRiwtIFW7gIndVD6ZaaCI_4';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${BAERER_KEY}`
  }
};

async function fetchTrendingMovies(){
  const url =`https://api.themoviedb.org/3/trending/all/week?language=en-US`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();

    return data;
  }
  else if(response.status === 404){ 
    throw 404
  }
  else throw 'error';
}

async function fetchMovieList(topOrpop){
  // console.log(topOrpop);
  // const url =`https://api.themoviedb.org/3/movie/${topOrpop}?language=en-US`;
  const url =`https://api.themoviedb.org/3/movie/${topOrpop}`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    return data;
  }
  else if(response.status === 404){ 
    throw 404
  }
  else throw 'error';
}

async function fetchMoviesOrPerson(searchQuery, currentPage){
  const url =`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&page=${currentPage}`;
  // const url =`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&page=1`;
  const response = await fetch(url, options);

  console.log(response);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      console.log('Inga resultat');
      throw 404;
    }
    return data;
  }
  else if(response.status === 404){ 
    throw 404;
  }
  else throw 'error';
}


async function fetchMovieDetails(movieId){
  const url =`https://api.themoviedb.org/3/movie/${movieId}?&append_to_response=credits`;
  const response = await fetch(url, options);

  //Results = 0, testa
  if(response.ok){ 
    const data = await response.json();
    return data;
  }
  else if(response.status === 404){ 
    throw 404
  }
  else throw 'error';
}



export {fetchMovieList,fetchMoviesOrPerson, fetchTrendingMovies, fetchMovieDetails };
// export {getTopRatedMovies, getPopularMovies, getRatedMovies};

//Claras
// function displayError(error){
//   console.log(error);

//   let message;
//   if(error === '404 lang') message = `That's not a language... try again.`;
//   else if(error === '404 name') message = `That's not a country... try again.`;
//   else message = 'Something went wrong... wait for a bit and try again,';

//   const errorMessageEl = document.querySelector('#errorMessage');
//   errorMessageEl.innerText = message;

//   const errorContainer = document.querySelector('#errorContainer');
//   errorContainer.classList.remove('hide');
// }












  

