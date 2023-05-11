import React, { useRef, useState } from "react";
import "./Intro.css";
import { meal } from "../../constants";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
const Intro = () => {
  const [playVideo, setplayvideo] = useState(false);
  const vidRef = useRef();
  const handelVideo = () => {
    setplayvideo((prevplayVideo) => !prevplayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  
  return (
    <div className="app__video">
      <video
        src={meal}
        muted
        loop
        controls={true}
        type="video/mp4"
        ref={vidRef}
      />
      <div className="app__video-ovelay flex__center">
        <div
          className="app__video-ovelay_circle flex__center"
          onClick={handelVideo}
        >
          {playVideo ? (
            <BsPauseFill fontSize="30px" color="#fff" />
          ) : (
            <BsFillPlayFill fontSize="30px" color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
