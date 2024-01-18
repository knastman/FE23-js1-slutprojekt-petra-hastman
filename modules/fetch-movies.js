
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
    if(data.total_results == 0){
      throw 404;
    }
    return data;
  }
  else throw 'error';
}

async function fetchMovieList(topOrpop){
  const url =`https://api.themoviedb.org/3/movie/${topOrpop}`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      throw 404;
    }
    return data;
  }
  else throw 'error';
}

async function fetchMoviesOrPerson(searchQuery, currentPage){
  const url =`https://api.themoviedb.org/3/search/multi?query=${searchQuery}&include_adult=false&page=${currentPage}`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      throw 404;
    }
    return data;
  }
  else throw 'error';
}


async function fetchMovieDetails(movieId){
  const url =`https://api.themoviedb.org/3/movie/${movieId}?&append_to_response=credits`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      throw 404;
    }
    console.log(data);
    return data;
  }
  else throw 'error';
}

async function fetchPersonDetails(personId){
  const url =`https://api.themoviedb.org/3/person/${personId}?&append_to_response=movie_credits`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      throw 404;
    }
    console.log(data);
    return data;
  }
  else throw 'error';
}


async function fetchTvSeriesDetails(tvId){
  const url =`https://api.themoviedb.org/3/tv/${tvId}?append_to_response=credits`;
  const response = await fetch(url, options);

  if(response.ok){ 
    const data = await response.json();
    if(data.total_results == 0){
      throw 404;
    }
    console.log(data);
    return data;
  }
  else throw 'error';
}

export {fetchMovieList,fetchMoviesOrPerson, fetchTrendingMovies, fetchMovieDetails, fetchPersonDetails, fetchTvSeriesDetails };













  

