import React, { useState } from 'react';


const Logo_and_icon = ({data}) => {
    const [clicked, setClicked] = useState(false);
  return (
    <div
    key={data.id}
      className="ScamDatabase-div"
      onClick={() => setClicked(!clicked)}
      style={{ background: clicked ? "#221eca" : "white" }}
    >
      <img src={data.image} alt="" className="ScamDatabase_img" />
      <p
        className="ScamDatabase-header-text"
        style={{ color: clicked ? "white" : "gray" }}
      >
        {data.title}
      </p>
    </div>
  )
}

export default Logo_and_icon