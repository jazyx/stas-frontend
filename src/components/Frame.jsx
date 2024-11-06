/**
 * src/Routes/Frame.jsx
 */


import React from 'react';
import { Outlet } from "react-router-dom";

import { Menu } from './Menu';

export const Frame = () => {
  return (
    <>
      <Menu /> {/* id is set to "menu" */}
      <div id="outlet">
        <Outlet />
      </div>
    </>
  )
}