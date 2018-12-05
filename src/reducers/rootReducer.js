const initialState = {
  gifs: [],
  trendingGifs: [],
  targetGif: {},
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

    case 'LOADING_TARGET_GIF':
      return {...state, loading: true}

    case 'FETCH_TARGET_GIF':
      return {...state, loading: false, targetGif: action.payload}

    default:
      return state;
  }
}
