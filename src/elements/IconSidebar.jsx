import { useNavigate } from "react-router-dom";
import SoundClick from "./SoundClick";

const IconSidebar = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    SoundClick();
    navigate(props.href);
  };

  return (
    <>
      <li className="flex items-center mb-6 hover:scale-110 duration-500 ease-in-out">
        <img
          src={props.icon}
          width="30"
          className="group-hover:scale-150 duration-500"
          alt=""
        />
        <button
          onClick={handleClick}
          id="tujuan_pembelajaran"
          className="font-bold text-lg text-white ml-3"
        >
          {props.children}
        </button>
      </li>
    </>
  );
};

export default IconSidebar;
