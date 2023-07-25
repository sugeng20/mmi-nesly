import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  const [active, setActive] = useState(true);

  const hanndleToggle = () => {
    active == true ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div className="flex">
        <Sidebar active={active} />

        <section className="w-full">
          <Navbar>
            <div className="ml-5 bg-cyan-800 px-2 rounded-lg lg:hidden absolute flex justify-center z-20">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={hanndleToggle}
                className="hamburger-active"
              >
                <div>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </div>
              </button>
            </div>
          </Navbar>

          <article className="w-full bg-cyan-500 h-[88vh] bg-cover bg-center bg-no-repeat px-6 pt-10 bg-[url('/img/bg.png')]">
            <div class="py-4 rounded-lg h-[65vh] bg-white shadow-lg w-full relative">
              {children}
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Layout;
