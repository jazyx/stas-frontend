/**
 * src/components/Catalog/Card.jsx
 */


import React from 'react'


export const Card = (props) => {  
  // {
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
  //       name: ['Red Fish', 'The Red Fishes'],
  //       _id: ObjectId('672b044ba7c9b091dfa7a01b')
  //     }, ...
  //   ],
  //   __v: 0
  // }

  const { title, year, thumbnail, languages } = props
  const flags = languages.map(({ lang }) => {
    const src = `flags/${lang}.svg`
    return (
      <li key={lang}>
        <img src={src} alt={lang}/>
      </li>
    )
  })

  return (
    <div>
      <h1>{title}</h1>
      <h3>{year}</h3>
      <img src={thumbnail} alt={title}/>
      <ul>{flags}</ul>
      </div>
  )
}