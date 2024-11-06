/**
 * src/components/Catalog/Selection.jsx
 */


import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FilmContext } from '../../contexts'
import { Language } from './Language'


export const Selection = (props) => {
  const { t } = useTranslation()
  const {
    film, // may be {}
    subtitles,
    transcript,
    setLanguage
  } = useContext(FilmContext)

  const { title, year, vo, languages } = film  

  if (!title) {
    return
  }

  const blurb = languages.find(({ lang }) => lang === vo ).blurb

  const select = ({ target }) => {
    const { name, value } = target
    setLanguage(name, value)
  }

  const sProps = {
    field: "subtitles",
    languages,
    value: subtitles,
    select
  }

  const tProps = {
    field: "transcript",
    languages,
    value: transcript,
    select
  }

  return (
    <div id="selection">
      <h1>{title} <span>({year})</span></h1>
      <p>{blurb}</p>

      <div className="languages">
        <Language {...sProps}/>
        <Language {...tProps}/>
      </div>

      <div className="watch">
        <button className="primary">
          {t("watch")}
        </button>
      </div>
    </div>
  )
}