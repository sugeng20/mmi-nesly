import { useState } from "react";
import IcSoundOn from "/img/ic_sound.png";
import SoundClick from "./SoundClick";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";

const IconNavbar = (props) => {
  const type = props.type;
  const navigate = useNavigate();
  const signOut = useSignOut();

  if (type == "link") {
    const handleClick = () => {
      SoundClick();
      if (props.href == "/exit") {
        signOut();
        navigate("/");
      } else {
        navigate(props.href);
      }
    };

    return (
      <li className="mr-2 lg:mr-6 group">
        <button onClick={handleClick}>
          <img
            src={props.icon}
            className="group-hover:scale-125 duration-500"
            width="50"
            alt=""
          />
        </button>
      </li>
    );
  }

  if (type == "button") {
    const [sound, setSound] = useState(false);
    var backsound = new Audio("/audio/backsound.mp3");

    function playBacksound() {
      SoundClick();
      backsound.loop = "true";
      backsound.play();
    }

    function stopBacksound() {
      SoundClick();
      backsound.pause();
    }

    const handleSound = () => {
      if (sound) {
        stopBacksound();
        setSound(false);
      } else {
        playBacksound();
        setSound(true);
      }
    };

    return (
      <li className="mr-2 lg:mr-6 group">
        <button onClick={handleSound}>
          {sound ? (
            <img
              src={IcSoundOn}
              className="group-hover:scale-125 duration-500"
              width="50"
              alt=""
            />
          ) : (
            <img
              src={props.icon}
              className="group-hover:scale-125 duration-500"
              width="50"
              alt=""
            />
          )}
        </button>
      </li>
    );
  }
};

export default IconNavbar;
