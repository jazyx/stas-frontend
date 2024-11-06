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


export const Context = createContext()


export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const {
    films,
    subtitle,
    transcription,
    videoId,
    width,
    height,
    aspect
  } = state  


  const setFilms = payload => {
    dispatch({
      type: "SET_FILMS",
      payload
    })
  }


  const select = payload => {
    dispatch({
      type: "SELECT_FILM",
      payload
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
    <Context.Provider
      value ={{
        films,
        subtitle,
        transcription,
        videoId,
        width,
        height,
        aspect,
        select
      }}
    >
      {children}
    </Context.Provider>
  )
}