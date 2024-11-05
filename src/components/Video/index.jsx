/**
 * components/Video/index.jsx
 */


import React from 'react'
import { Player } from './Player'


export const Video = (props) => {

  return (
    <div
      id="video"
    >
      <Player {...props} />

      <div>
        <pre id="subtitle"></pre>
      </div>
    </div>
  )
}