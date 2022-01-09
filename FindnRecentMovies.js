// time complexity O(n) + O(nk) may be for slicing (not sure)
// spcae compexity O(n)

function findnRecent(movies, numberOfRecent) {
  if(movies.length === 0) return ''
  if(movies.length === 1) return movies [0]
  const mergedMovies = [movies[0]]
    for(let i=1; i<movies.length; i++) {
        const currentMovieInList = movies[i];
        const lastMergedMostRecentMovie = mergedMovies[mergedMovies.length - 1]
        if(lastMergedMostRecentMovie.name !== currentMovieInList.name) {
          if(currentMovieInList.year > lastMergedMostRecentMovie.year) {
              mergedMovies.push(currentMovieInList)
          } 
        }
    }
    return mergedMovies.slice(-(numberOfRecent))
    
}

console.log(findnRecent([
    {name: 'A', year: 2010},
    {name: 'D', year: 2001},
    {name: 'B', year: 2001},
    {name: 'C', year: 2020},
    {name: 'E', year: 2050}
], 3))

