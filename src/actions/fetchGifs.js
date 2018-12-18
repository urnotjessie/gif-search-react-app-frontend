export function fetchGifs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIFS' });
    return fetch('http://localhost:3001/api/trending')
      .then(response => response.json())
      .then(gifs => dispatch({ type: 'FETCH_GIFS', payload: gifs.data }))
  };
}

export function fetchSearchGifs(query) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SEARCH_GIFS' });

    fetch(`http://localhost:3001/api/search`,{
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
    fetch(`http://localhost:3001/api/trending/${id}`)
      .then(response => response.json())
      .then(gifs => dispatch({ type: 'FETCH_TARGET_GIF', payload: gifs.data }))
  };
}

export function createFavoriteGif(gif) {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/favorite`,{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({ gif: gif })
    })
      .then(response =>response.json())
      .then(gif => dispatch({ type: 'CREATE_FAVORITE', gif }))
  }
}
