import LogoSMP from "/img/logo-smp.png";
import IcTujuan from "/img/ic_tujuan.png";
import IcPetunjuk from "/img/ic_petunjuk.png";
import IcPeta from "/img/ic_peta.png";
import IcMateri from "/img/ic_materi.png";
import IcForum from "/img/ic_forum.png";
import IcEvaluasi from "/img/ic_evaluasi.png";
import IcReferensi from "/img/ic_referensi.png";
import IcProfile from "/img/ic_profile.png";
import { useState } from "react";
import IconSidebar from "../elements/IconSidebar";

const Sidebar = (props) => {
  let active = props.active ? " -translate-x-96" : "";
  return (
    <>
      <aside
        className={
          "lg:w-96 w-80 h-screen bg-primary absolute lg:relative lg:translate-x-0 overflow-hidden transition duration-500 ease-in-out z-10" +
          active
        }
      >
        <div className="flex justify-end mr-8 mt-3 flex-wrap lg:justify-center lg:mr-0">
          <a onClick="navigation(1)" className="cursor-pointer">
            <div className="lg:w-[270px] lg:h-[50px] w-[200px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src={LogoSMP} className="ml-3 lg:ml-0" width="25" alt="" />
              <h1 className="font-bold text-sm text-center lg:ml-2">
                SMP NEGERI 2 LELEA INDRAMAYU
              </h1>
            </div>
          </a>
        </div>

        <div className="px-5 mt-8">
          <ul>
            <IconSidebar href={"/tujuan-pembelajaran"} icon={IcTujuan}>
              Tujuan Pembelajaran
            </IconSidebar>
            <IconSidebar href={"/petunjuk-penggunaan"} icon={IcPetunjuk}>
              Petunjuk Penggunaan
            </IconSidebar>
            <IconSidebar href={"/peta-konsep"} icon={IcPeta}>
              Peta Konsep
            </IconSidebar>
            <IconSidebar href={"/materi-pembahasan"} icon={IcMateri}>
              Materi Pembahasan
            </IconSidebar>
            <IconSidebar href={"/forum-diskusi"} icon={IcForum}>
              Forum Diskusi
            </IconSidebar>
            <IconSidebar href={"/evaluasi"} icon={IcEvaluasi}>
              Evaluasi
            </IconSidebar>
            <IconSidebar href={"/referensi"} icon={IcReferensi}>
              Referensi
            </IconSidebar>
            <IconSidebar href={"/profil-pengembang"} icon={IcProfile}>
              Profil Pengembang
            </IconSidebar>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
