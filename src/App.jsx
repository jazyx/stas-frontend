/**
 * src/App.jsx
 */


import React from 'react'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Provider } from './model/Context'
import { Frame } from './components/Frame'
import { Video } from './components/Video'
import { Catalog } from './components/Catalog'


export const App = (props) => {


  return (
    <Router>
      <Provider>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route
            path="/"
            element={<Frame />}
          >
            {/* Paths wrapped by Frame go here */}
            {/* Paths that end with /* will ignore extra params */}
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Catalog />} />
            <Route path="watch" element={<Video />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  )
}