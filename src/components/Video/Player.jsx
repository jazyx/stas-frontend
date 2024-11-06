/**
 * src/components/Video/Player.jsx
 */


import React from 'react'
import YouTube from 'react-youtube'


export const Player = (props) => {
  const {
    width = "560",
    height = "315",
    videoId = "BH5Y9A2MHQA",
    temple = "LhaWOPh-zo0"
  } = props


  // HACK which should prevent postMessage from being blocked
  if (!window.YTConfig) {
    window.YTConfig = {
      host: 'https://www.youtube.com'
    }
  } else {
    window.YTConfig.host = 'https://www.youtube.com'
  }


  const options = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }


  const onReady = ({ target }) => {
    console.log("Ready to play...")
    target.pauseVideo()
  }


  return (
    <YouTube
      videoId={videoId}
      opts={options}
      onReady={onReady}
    />
  )
}