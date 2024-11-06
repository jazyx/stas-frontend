/**
 * src/contexts/i18n.js
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
const deployed = location.host === "lexogram.github.io"
const loadPath = (deployed)
  ? `locales/{{lng}}/{{ns}}.json`
  : `locales/{{lng}}/{{ns}}.json`
  // : `stv/locales/{{lng}}/{{ns}}.json`
// const loadPath = `locales/{{lng}}/{{ns}}.json`
const options = {
  debug: true,
  fallbackLng: ["en"],
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath
  }
}
i18n
  .use(Backend)
  .use(initReactI18next)
  .init(options)
  
export default i18n