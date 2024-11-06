/**
 * src/components/Menu.jsx
 */


import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export const Menu = (props) => {
  const location = useLocation()
  // {
  //   pathname: "/watch",
  //   search: "",
  //   hash: "",
  //   state: null,
  //   key: "ta52do9d"
  // }

  const links = [
    { to: "/", text: "Films" },
    { to: "/watch", text: "Watch" }
  ]
  

  let linkList = []

  
  const setLinkList = () => {    
    const pathname = location.pathname

    linkList = links.map(({ to, text }) => {
      const isSelected = to === pathname
      const className = isSelected ? "selected" : null
      return (
        <li
          key={to}
          className={className}
        >
          <Link
            to={to}
          >
            {text}
          </Link>
        </li>
      )
    })
  }


  setLinkList()
  useEffect(setLinkList, [location])


  return (
    <ul id="menu" className="menu">
      {linkList}
    </ul>
  )
}