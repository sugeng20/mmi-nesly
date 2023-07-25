import LearningContent from "../../components/LearningContent";
import Layout from "./Layout";
import { useAuthUser } from "react-auth-kit";
import UserSiswa from "/img/user-siswa.png";
import UserGuru from "/img/user-guru.png";

const Profil = () => {
  const auth = useAuthUser();
  return (
    <>
      <Layout>
        <LearningContent title="Profil">
          <div className="w-full flex flex-wrap px-6">
            <div
              className="w-full lg:w-1/2 flex"
              data-aos="fade-up"
              data-aos-anchor="#content"
              data-aos-delay="500"
            >
              <table className="text-lg">
                <tr>
                  <td width="200">Nama Lengkap</td>
                  <td>:</td>
                  <td>{auth().nama_depan}</td>
                </tr>
                <tr>
                  <td width="200">Nama Belakang</td>
                  <td>:</td>
                  <td>{auth().nama_belakang}</td>
                </tr>

                <tr>
                  <td width="200">NIS/NIK</td>
                  <td>:</td>
                  <td>{auth().nis_nik}</td>
                </tr>

                <tr>
                  <td width="200">Email</td>
                  <td>:</td>
                  <td>{auth().email}</td>
                </tr>

                <tr>
                  <td width="200">Role</td>
                  <td>:</td>
                  <td>{auth().role}</td>
                </tr>
              </table>
            </div>
            <div
              className="w-full lg:w-1/2 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-anchor="#content"
              data-aos-delay="1000"
            >
              {auth().role == "SISWA" ? (
                <img src={UserSiswa} width="250" className="" alt="" />
              ) : (
                <img src={UserGuru} width="250" className="" alt="" />
              )}
            </div>
          </div>
        </LearningContent>
      </Layout>
    </>
  );
};

export default Profil;
