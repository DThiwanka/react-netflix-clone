import "./featured.scss";
import { PlayArrow, InfoOutlined} from '@material-ui/icons/index'

export default function Featured({type}) {
  return (
    <div className="featured">

    {type &&(
      <div className="category">
        <span>
          {type === "movie" ? "Movies" : "Series"}
        </span>

      <select name="genre" id="genre">
        <option>Genre</option>
        <option value="comedy">Comedy</option>
        <option value="crime">Crime</option>
        <option value="fantasy">Fantasy</option>
        <option value="historical">Historical</option>
        <option value="romace">Romace</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        <option value="animation">Animation</option>
        <option value="drama">Drama</option>
        <option value="documentry">Documentry</option>
      </select>

      </div>
    )}

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Karnaval_Hasselt.jpg/1280px-Karnaval_Hasselt.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/The-matrix-logo.svg/1920px-The-matrix-logo.svg.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, saepe
          ullam? Fugit distinctio eius minima ab rem quas possimus velit sed
          libero quia accusantium assumenda alias ad, maiores doloremque quasi!
        </span>
        <div className="buttons">
            <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
            </button>
            <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
              </button> 
        </div>
      </div>
    </div>
  );
}
