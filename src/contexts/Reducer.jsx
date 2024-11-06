/**
 * Reducer.jsx
 * 
 * Use useReducer when:
 * + The next state depends on the previous state
 * + The state is complex
 * + You want to keep business logic:
 *   + as a pure function
 *   + in a separate module
 * + You want to be able to test easily
 */


const initialState = {
  films: [],
  subtitles: "en-US",
  transcription: "en-US",
  videoId: "",
  film: {}
}


const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "SET_FILMS":
      return setFilms(state, payload)

    case "SELECT_FILM":
      return selectFilm(state, payload)

    case "SET_LANGUAGE":
      return setLanguage(state, payload)

    default:
      return {...state}
  }
}


function setFilms( state, films ) {
  return { ...state, films }
}


function selectFilm( state, videoId ) {
  const film = state.films.find( film => film.videoId === videoId)
  const { width, height } = film
  film.aspect = width / height
  return {
    ...state,
    videoId,
    film
  }
}


function setLanguage(state, { field, code }) {
  return { ...state, [field]: code }
}


export { reducer, initialState }
