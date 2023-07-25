import LogoSMP from "/img/logo-smp.png";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <>
      <div className="container mx-auto justify-center flex pt-8 lg:block">
        <Link to={"/"}>
          <div className="w-[300px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-lg">
            <img src={LogoSMP} width="25" alt="" />
            <h1 className="font-bold text-sm text-center ml-3">
              SMP NEGERI 2 LELEA INDRAMAYU
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeaderAuth;
