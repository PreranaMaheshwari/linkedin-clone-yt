import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  return (
  <div className="Sidebar">
    <div className="sidebar__top">
        <img src="" alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>Prerana Maheshwari</h2>
        <h4>maheshwari05.prerana@gmail.com</h4>
    </div>
  </div>
  );
}

export default Sidebar;