import { Add, PlayArrow, ThumbDownOutlined, ThumbsUpDownOutlined } from "@material-ui/icons"
import React from "./listitem.scss"

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://image.freepik.com/free-photo/woman-watching-movie-home_23-2149026114.jpg" alt="" />
        
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow/>
                <Add/>
                <ThumbsUpDownOutlined/>
                <ThumbDownOutlined/>
            </div>
        </div>

        </div>
    )
}
