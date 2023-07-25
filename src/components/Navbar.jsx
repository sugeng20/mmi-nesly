import IcHome from "/img/ic_home.png";
import IcUser from "/img/ic_user.png";
import IcSoundOff from "/img/ic_sound_off.png";
import IcExit from "/img/ic_exit.png";
import IconNavbar from "../elements/IconNavbar";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="w-full bg-slate-100 h-[12vh] flex items-center">
        {children}
        <ul className="ml-auto mr-8 flex">
          <IconNavbar href={"/home"} icon={IcHome} type={"link"} />
          <IconNavbar href={"/profil"} icon={IcUser} type={"link"} />
          <IconNavbar icon={IcSoundOff} type={"button"} />
          <IconNavbar href={"/exit"} icon={IcExit} type={"link"} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
