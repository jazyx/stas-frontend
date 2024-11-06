/**
 * src/components/Catalog/index.jsx
 */


import React, { useContext } from 'react'
import { Context } from '../../model/Context'
import { Card } from './Card'


export const Catalog = (props) => {
  const { films } = useContext(Context)
  // console.log("films:", films);
  // [ {
  //   _id: ObjectId('672b044ba7c9b091dfa7a01a'),
  //   title: 'Los Peces Rojos',
  //   videoId: 'BH5Y9A2MHQA',
  //   thumbnail: 'LosPecesRojos.webp',
  //   year: 1955,
  //   width: 560,
  //   height: 315,
  //   languages: [
  //     {
  //       lang: 'en_US',
  //       file: 'LosPecesRojos_1955_EN.srt',
  //       name: 'Red Fish',
  //       _id: ObjectId('672b044ba7c9b091dfa7a01b')
  //     }, ...
  //   ],
  //   __v: 0
  // }]
  
  const filmList = films.map( film => (
    <Card
      key={film.videoId}
      {...film}
    />))

  return (
    <ul id="catalog">
      {filmList}
    </ul>
  )
}