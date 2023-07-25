import Layout from "./Layout";
import RegisterImage from "/img/register.png";

const Register = () => {
  return (
    <>
      <Layout>
        <div className="container flex flex-wrap justify-center mt-6">
          <div className="w-full">
            <div className="w-full h-min-[320px] bg-slate-50 shadow-xl px-4 py-6 rounded-3xl m-auto">
              <form action="#" method="POST">
                <div className="w-full flex flex-wrap">
                  <div className="w-full lg:w-1/2 flex flex-wrap">
                    <div className="w-full px-4 mb-4">
                      <h1 className="text-slate-900 text-2xl lg:text-4xl font-bold">
                        Buat Akun Baru
                      </h1>
                      <p className="text-slate-700 font-semibold text-sm lg:text-lg mt-2">
                        Silahkan buat akun baru dan lengkapi biodata Anda
                        dibawah ini :
                      </p>
                    </div>
                    <div className="lg:w-1/2 w-full px-4 mb-4">
                      <input
                        type="text"
                        name="nama_depan"
                        id="nama_depan"
                        placeholder="Nama Depan"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      />
                    </div>
                    <div className="lg:w-1/2 w-full px-4 mb-4">
                      <input
                        type="text"
                        name="nama_belakang"
                        id="nama_belakang"
                        placeholder="Nama Belakang"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      />
                    </div>
                    <div className="w-full px-4 mb-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Anda"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      />
                    </div>
                    <div className="lg:w-1/2 w-full px-4 mb-4">
                      <input
                        type="number"
                        name="nis_nik"
                        id="nis_nik"
                        placeholder="NIS/NIP"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      />
                      <p className="text-xs mt-1 text-slate-600">
                        *NIK (Nomor Induk Siswa) diisi wajib oleh siswa, NIP
                        (Nomor Induk Pendidik) diisi wajib oleh guru
                      </p>
                    </div>
                    <div className="lg:w-1/2 w-full px-4 mb-4">
                      <select
                        name="role"
                        id="role"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      >
                        <option value="">- SEBAGAI -</option>
                        <option value=" SISWA">SISWA</option>
                        <option value="GURU">GURU</option>
                      </select>
                    </div>
                    <div className="w-full px-4 mb-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="bg-slate-200 text-slate-900 w-full rounded-md p-3"
                        required
                      />
                    </div>
                    <div className="w-2/3 flex px-4 mb-10">
                      <button
                        type="submit"
                        className="py-3 px-10 bg-green-700 text-white text-lg rounded-lg hover:opacity-80 hover:shadow-lg transition duration-500"
                      >
                        Daftar
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={RegisterImage} width="450" alt="" />
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

export default Register;
