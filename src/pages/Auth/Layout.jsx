import HeaderAuth from "../../components/HeaderAuth";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[url('/img/bg-front.png')] h-screen  w-full bg-center bg-no-repeat bg-cover">
        <HeaderAuth />
        {children}
      </div>
    </>
  );
};
export default Layout;
