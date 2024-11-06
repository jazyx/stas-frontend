/**
 * src/components/Catalog/Language.jsx
 */


import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { I18nContext } from '../../contexts'


export const Language = ({ field, languages, value, select }) => {
  const { t } = useTranslation()

  const {
    languages: languageData
  } = useContext(I18nContext)


  const getLangData = (lang) => {
    if (languageData[lang]) {
      return languageData[lang]
    }

    lang = lang.replace(/-\w*/, "")

    return languageData[lang]
  }


  const langs = languages.map( lang => lang.lang )
  const options = langs.map( lang => {
    const { name, emoji } = getLangData(lang)

    return (
      <option
        key={lang}
        value={lang}
      >
        {emoji} {name}
      </option>
    )
  })

  options.push(
    <option
      key="null"
      value=""
    >
      🚫 {t("off")}
    </option>
  )

  return (
    <label>
      <span>{t(field)}</span>
      <select
        name={field}
        value={value}
        onChange={select}
      >
        {options}
      </select>
    </label>
  )
}