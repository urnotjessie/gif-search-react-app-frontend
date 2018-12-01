const initialState = {
  gifs: [],
  trendingGifs: [],
  loading: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'LOADING_GIFS':
      return {...state, loading: true}

    case 'FETCH_GIFS':
      return {...state, loading: false, trendingGifs: action.payload}

    case 'LOADING_SEARCH_GIFS':
      return {...state, loading: true}

    case 'FETCH_SEARCH_GIFS':
      return {...state, loading: false, gifs: action.payload}

    default:
      return state;
  }
}
