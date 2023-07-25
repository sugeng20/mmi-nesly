import Layout from "./Layout";
import LupaPasswordImage from "/img/lupa-password.png";

const LupaPassword = () => {
  return (
    <>
      <Layout>
        <div className="container flex flex-wrap mt-6">
          <div className="w-full">
            <div className="w-full lg:w-4/5 h-min-[500px] bg-slate-50 shadow-xl px-4 py-6 rounded-3xl">
              <form action="#" method="POST">
                <div className="w-full flex flex-wrap">
                  <div className="lg:w-2/3 w-full px-4 mb-4">
                    <h1 className="text-slate-900 lg:text-3xl text-2xl font-bold">
                      Lupa Password? Jangan Khawatir!
                    </h1>
                    <p className="text-slate-700 font-semibold text-xs lg:text-lg mt-4">
                      Silahkan masukan email Anda yang telah terdaftar. <br />{" "}
                      Kode untuk mengatur ulang password akan kami kirimkan via
                      email{" "}
                    </p>
                    <div className="w-full my-4">
                      <label for="email" className="text-slate-900 text-xl">
                        Email Terdaftar
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Masukan Email"
                        className="bg-slate-200 text-slate-900 w-full mt-2 rounded-md p-3"
                        required
                      />
                    </div>

                    <div className="w-full lg:w-2/3 mb-4">
                      <button
                        type="submit"
                        className="py-3 px-10 bg-green-700 text-white text-lg rounded-full hover:scale-125 hover:opacity-80 hover:shadow-lg transition duration-500"
                      >
                        Kirim Kode
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/3 flex justify-center">
                    <img src={LupaPasswordImage} width="300" alt="" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LupaPassword;
