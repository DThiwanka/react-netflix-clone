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
    const trailer =
    "https://vod-progressive.akamaized.net/exp=1639312748~acl=%2A%2F1135624384.mp4%2A~hmac=7aa19b96a7b1e4e9dda2d240a9db2063dc32bc1f5e2d8f98010845d142c0c505/vimeo-prod-skyfire-std-us/01/4577/11/297888097/1135624384.mp4";
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
    <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon" />
          <Add className="icon"/>
          <ThumbUpOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
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
