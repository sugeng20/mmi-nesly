import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import LupaPassword from "../pages/Auth/LupaPassword";
import TujuanPembelajaran from "../pages/Siswa/TujuanPembelajaran";
import { useEffect } from "react";
import nprogress from "nprogress";
import PetunjukPenggunaan from "../pages/Siswa/PetunjukPenggunaan";
import PetaKonsep from "../pages/Siswa/PetaKonsep";
import MateriPemabahasan from "../pages/Siswa/MateriPembahasan";
import ForumDiksusi from "../pages/Siswa/ForumDiskusi";
import Evaluasi from "../pages/Siswa/Evaluasi";
import Referensi from "../pages/Siswa/Referensi";
import ProfilPengembang from "../pages/Siswa/ProfilPengembang";
import { RequireAuth } from "react-auth-kit";
import Profil from "../pages/Siswa/Profil";

const Router = () => {
  let location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lupa-password" element={<LupaPassword />} />

      <Route
        path="/tujuan-pembelajaran"
        element={
          <RequireAuth loginPath="/">
            <TujuanPembelajaran />
          </RequireAuth>
        }
      />
      <Route
        path="/petunjuk-penggunaan"
        element={
          <RequireAuth loginPath="/login">
            <PetunjukPenggunaan />
          </RequireAuth>
        }
      />
      <Route
        path="/peta-konsep"
        element={
          <RequireAuth loginPath="/">
            <PetaKonsep />
          </RequireAuth>
        }
      />
      <Route
        path="/materi-pembahasan"
        element={
          <RequireAuth loginPath="/">
            <MateriPemabahasan />
          </RequireAuth>
        }
      />
      <Route
        path="/forum-diskusi"
        element={
          <RequireAuth loginPath="/">
            <ForumDiksusi />
          </RequireAuth>
        }
      />
      <Route
        path="/evaluasi"
        element={
          <RequireAuth loginPath="/">
            <Evaluasi />
          </RequireAuth>
        }
      />
      <Route
        path="/referensi"
        element={
          <RequireAuth loginPath="/">
            <Referensi />
          </RequireAuth>
        }
      />
      <Route
        path="/profil-pengembang"
        element={
          <RequireAuth loginPath="/">
            <ProfilPengembang />
          </RequireAuth>
        }
      />
      <Route
        path="/profil"
        element={
          <RequireAuth loginPath="/">
            <Profil />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Router;
