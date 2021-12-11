import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import React from "./listitem.scss";

export default function ListItem({index}) {

    const [isHoverd,setIsHovered] = useState(false);
    const trailer = ""

  return (
    <div className="listItem"
    style={{left: isHoverd && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <img
        src="https://image.freepik.com/free-photo/woman-watching-movie-home_23-2149026114.jpg"
        alt=""
      />
      {isHoverd &&(
          <>
    <video src={trailer} autoplay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>

        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum
          nobis iure, sequi nihil, sunt magnam quis, consectetur eius qui
          dolore!
        </div>

        <div className="genre">
            Action
        </div>
      </div></>
      )}
    </div>
  );
}
