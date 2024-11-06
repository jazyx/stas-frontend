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
  subtitle: "en_US",
  transcription: "en_US",
  videoId: "",
  width: 560,
  height: 315,
  aspect: 1.777777777777
}


const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "SET_FILMS":
      return setFilms(state, payload)

    default:
      return {...state}
  }
}



function setFilms( state, films ) {
  return { ...state, films }
}


export { reducer, initialState }
