import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>

    </div>
  );

  return (
  <div className="Sidebar">
    <div className="sidebar__top">
        <img src="https://d33wubrfki0l68.cloudfront.net/8d79b89491cf9ef958be1386776dc937d39266be/1a630/img/particle_background.jpg" alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>Prerana </h2>
        <h4>prerana@mattermeaning.com</h4>
    </div>

    <div className="sidebar__stats">
      <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className="sidebar__statNumber">2,543</p>
      </div>
      <div className="sidebar__stat">
        <p>Views on post</p>
        <p className="sidebar__statNumber">2,448</p>

      </div>
    </div>

    <div className="sidebar__bottom">
      <p>Recent</p>
      {recentItem("reactjs")}
      {recentItem("design")}
      {recentItem("developer")}
    </div>
  </div>
  );
}


export default Sidebar;