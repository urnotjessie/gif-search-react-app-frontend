export function fetchGifs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIFS' });
    return fetch('http://localhost:3001/api/trending')
      .then(response => response.json())
      .then(gifs => dispatch({type: 'FETCH_GIFS', payload: gifs.data}))
  };
}
