/**
 * src/components/Video/Player.jsx
 */


import React from 'react'
import YouTube from 'react-youtube'


export const Player = (props) => {
  const {
    width = "560",
    height = "315",
    videoId = "LhaWOPh-zo0"
  } = props


  const options = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
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