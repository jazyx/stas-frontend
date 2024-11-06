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
  //   vo: "es-ES"
  //   width: 560,
  //   height: 315,
  //   languages: [
  //     {
  //       lang: 'en_US',
  //       file: 'LosPecesRojos_1955_EN.srt',
  //       offset: 0,
  //       name: ['Red Fish', 'The Red Fishes'],
  //       blurb: "...",
  //       _id: ObjectId('672b044ba7c9b091dfa7a01b')
  //     }, ...
  //   ],
  //   __v: 0
  // }

  const {
    title,
    year,
    vo,
    thumbnail,
    languages,
    $selected,
    videoId,
    selectFilm
  } = props

  languages.sort(byVO)

  function byVO(langA, langB) {
    // Show the original language first
    if (langA.lang === vo) {
      return -1
    } else if (langB.lang === vo) {
      return 1
    }

    // Show other languages in alphabetical order
    if (langA.lang < langB.lang) {
      return -1
    }

    return 1
  }

  const flags = languages.map(({ lang }) => {
    const src = `flags/${lang}.png`
    return (
      <li
        key={lang}
      >
        <img
          src={src}
          alt={lang}
        />
      </li>
    )
  })


  const className = $selected ? "selected" : null  


  const select = () => {
    selectFilm(videoId)
  }


  return (
    <div
      className={className}
      onClick={select}
    >
      <h1>{title}</h1>
      <h3>{year}</h3>
      <img src={thumbnail} alt={title}/>
      <ul className="menu">{flags}</ul>
    </div>
  )
}