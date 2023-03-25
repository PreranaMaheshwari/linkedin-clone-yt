import React from "react";
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import inputOption from "./InputOption.css";
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';


function Feed() {
  return (<div className="feed">
    <div className="feed__inputContainer">
        <div className="feed__input">
             <CreateIcon />
             <form>
              <input type="text"
               />
              <button type='submit'>Send</button>
            </form>
        </div>
        <div className="feed__inputOptions">
            <inputOption Icon={ImageIcon} title="Photo" color="#70B5f9"/>
            <inputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
            <inputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
            <inputOption Icon={CalendarViewDayIcon} title="write article" color="#7FC15E"/>
        </div>
    </div>
</div>
);
}

export default Feed;