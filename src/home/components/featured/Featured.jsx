import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Lqpa2.jpg/800px-Lqpa2.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/03/Milky_way_seen_from_bolivian_high_altiplano_03.jpg"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, saepe
          ullam? Fugit distinctio eius minima ab rem quas possimus velit sed
          libero quia accusantium assumenda alias ad, maiores doloremque quasi!
        </span>
        <div className="buttons">
            <button className="play"></button>
            <button className="more"></button>
        </div>
      </div>
    </div>
  );
}
