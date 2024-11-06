/**
 * Context.jsx
 * description
 */

import React from 'react'

import { FilmProvider, FilmContext } from './FilmContext'
import { I18nProvider, I18nContext } from './I18nContext'



const Provider = ({ children }) => {
  return (
    <FilmProvider>
      <I18nProvider>
        {children}
      </I18nProvider>
    </FilmProvider>
  )
}


export {
  Provider,
  FilmContext,
  I18nContext
}