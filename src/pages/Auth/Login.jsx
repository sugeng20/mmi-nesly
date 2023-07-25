import Hero from "/img/hero.png";
import IcUser from "/img/ic-user.png";
import IcPassword from "/img/ic-password.png";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import axios from "axios";

const Login = () => {
  const [nisnik, setNisnik] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://mminesly.test/api/login", {
        nis_nik: nisnik,
        password: password,
      });
      signIn({
        token: response.data.data.access_token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: response.data.data.user,
      });
      navigate("/tujuan-pembelajaran");
    } catch (error) {
      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error) setError(err.message);

      console.log("Error: ", err);
    }
  };

  return (
    <>
      <Layout>
        <div className="container flex flex-wrap justify-center">
          <div className="w-full lg:w-3/5 m-auto lg:mt-3">
            <img src={Hero} width="600" alt="#" />
          </div>
          <div className="w-full lg:w-2/5">
            <div className="w-full lg:w-[400px] h-auto mt-8 bg-slate-50 shadow-xl px-4 py-10 rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="w-full px-4 mb-4">
                  <div className="flex items-center">
                    <img src={IcUser} width="25" alt="" />
                    <label className="text-slate-900 text-xl  font-bold ml-3">
                      NIS/NIP
                    </label>
                  </div>
                  <input
                    type="text"
                    name="nis_nik"
                    id="nis_nik"
                    value={nisnik}
                    onChange={(e) => setNisnik(e.target.value)}
                    placeholder="Masukan NIS/NIP"
                    className="w-full bg-slate-200 text-slate-900 mt-1 rounded-md p-3"
                    required
                  />
                </div>
                <div className="w-full px-4 mb-4">
                  <div className="flex items-center">
                    <img src={IcPassword} width="25" alt="" />
                    <label className="text-slate-900 text-xl font-bold ml-3">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukan Password"
                    className="w-full bg-slate-200 text-slate-900 mt-1 rounded-md p-3"
                    required
                  />
                </div>
                <div className="w-full justify-center flex">
                  <button
                    type="submit"
                    className="py-3 px-10 bg-green-700 text-white m-auto text-lg rounded-full hover:opacity-80 hover:shadow-lg transition duration-500"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-[400px] flex items-center mt-3 pb-5">
              <Link
                to={"/lupa-password"}
                className="font-bold text-white lg:text-black"
              >
                Lupa Password
              </Link>
              <Link
                to={"/register"}
                className="flex ml-auto font-bold text-white lg:text-black"
              >
                Daftar Baru
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
