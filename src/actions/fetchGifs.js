export function fetchGifs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIFS' });
    return fetch('https://infinite-brook-70100.herokuapp.com/api/trending')
      .then(response => response.json())
      .then(gifs => dispatch({ type: 'FETCH_GIFS', payload: gifs.data }))
  };
}

export function fetchSearchGifs(query) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SEARCH_GIFS' });

    fetch(`https://infinite-brook-70100.herokuapp.com/api/search`,{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({ query: query })
    })
      .then(response =>response.json())
      .then(gifs => dispatch({ type: 'FETCH_SEARCH_GIFS', payload: gifs.data }))
  }
}

export function fetchTargetGif(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TARGET_GIF' });
    fetch(`https://infinite-brook-70100.herokuapp.com/api/trending/${id}`)
      .then(response => response.json())
      .then(gifs => dispatch({ type: 'FETCH_TARGET_GIF', payload: gifs.data }))
  };
}
