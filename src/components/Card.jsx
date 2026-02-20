import React, { useState } from "react";

const Card = ({ item,tab }) => {
  const [saved, setSaved] = useState(false);

  const onSave = (e) => {
    e.stopPropagation();
    setSaved((prev) => !prev);
  };

  return (
    <div>
      {tab=='photos'?<a target="_blank" href={item.src}>
        <img 
        src={item.src} 
        alt="photo" 
        className="w-50 h-50 object-cover"
        />
      </a>:<a target="_blank" href={item.src}>
        <video 
        src={item.video_link} 
        alt="photo" 
        className="w-50 h-50 object-cover"
        autoPlay
        loop
        muted
        />
      </a>}
    </div>
  );
};

export default Card;