/**
 * src/components/Catalog/Selection.jsx
 */


import React, { useContext } from 'react'
import { FilmContext, I18nContext } from '../../contexts'
import { useTranslation, Trans } from 'react-i18next';


export const Selection = (props) => {
  const { t } = useTranslation()

  const {
    title,
    subtitle,
    transcription
  } = useContext(FilmContext)


  if (!title) {
    return
  }


  return (
    <p id="selection">
      <Trans
        i18nKey="watch.film"
        values={{ title }}
        // defaults="Watch <i>{{title}}</i> with "
      />
      <Trans
        i18nKey="watch.with.no"
      />
    </p>
  )
}