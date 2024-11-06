/**
 * model/Context.jsx
 *
 * description
 */


import React, {
  createContext,
  useState,
  useEffect,
  useReducer
} from 'react'
import { reducer, initialState } from './Reducer.jsx'
const BACKEND = import.meta.env.VITE_BACKEND


export const FilmContext = createContext()


export const FilmProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const {
    films,
    subtitles,
    transcription,
    videoId,
    film
  } = state  


  const setFilms = payload => {
    dispatch({
      type: "SET_FILMS",
      payload
    })
  }


  const selectFilm = payload => {
    dispatch({
      type: "SELECT_FILM",
      payload
    })
  }


  const setLanguage = (field, code) => {
    dispatch({
      type: "SET_LANGUAGE",
      payload: { field, code }
    })
  }


  const getRandomSample = () => {
    const url= BACKEND+"sample"
    
    fetch(url)
      .then(response => response.json())
      .then(setFilms)
      .catch(error => console.log("error:", error))
  }
  useEffect(getRandomSample, [])


  return (
    <FilmContext.Provider
      value ={{
        films,
        subtitles,
        transcription,

        videoId,
        film,

        selectFilm,
        setLanguage
      }}
    >
      {children}
    </FilmContext.Provider>
  )
}