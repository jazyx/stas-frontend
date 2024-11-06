/**
 * src/App.jsx
 */


import React from 'react'
import { Provider } from './model/Context'
import { Video } from './components/Video'
import { Catalog } from './components/Catalog'


export const App = (props) => {


  return (
    <Provider>
      <Catalog />
    </Provider>
  )
}