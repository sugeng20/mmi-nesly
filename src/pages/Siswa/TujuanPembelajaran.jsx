import LearningContent from "../../components/LearningContent";
import Layout from "./Layout";
import TPK from "/img/tujuan-pembelajaran-khusus.png";

const TujuanPembelajaran = () => {
  return (
    <>
      <Layout>
        <LearningContent title={"Tujuan Pembelajaran"}>
          <div className="w-full px-4 mb-10 justify-center">
            <img
              src={TPK}
              width="200"
              alt=""
              className="lg:float-right mr-10"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-anchor="#content"
            />
            <p
              className="leading-loose text-sm text-slate-900 lg:text-[18px] lg:leading-loose font-bold"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="#content"
            >
              Tujuan Pembelajaran Umum:
            </p>
            <p
              className="leading-loose text-sm text-justify text-slate-900 max-w-xl lg:text-[14px] lg:leading-loose"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-anchor="#content"
            >
              Setelah mempelajari multimedia interaktif berbasis website ini,
              siswa mampu menjelaskan perubahan interaksi antar negara asia dan
              negara lain di dunia yang diakibatkan faktor alam, manusia dan
              pengaruhnya terhadap keberlangsungan kehidupan manusia dalam
              ekonomi, sosial, pendidikan, dan politik.
            </p>
            <p
              className="leading-loose text-sm text-slate-900 lg:text-[18px] lg:leading-loose mt-6 font-bold"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-anchor="#content"
            >
              Tujuan Pembelajaran Khusus:
            </p>

            <ol
              className="list-decimal leading-loose text-justify text-sm max-w-xl text-slate-900 lg:text-[14px] lg:leading-loose ml-4"
              data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-anchor="#content"
            >
              <li>
                Siswa mampu menyebutkan kondisi geografis Benua Asia dan Benua
                lainnya, termasuk letak dan luas, iklim, geologi, rupa bumi,
                tata air, tanah, flora dan fauna melalui peta rupa bumi.
              </li>
              <li>
                Siswa mampu menyebutkan negara-negara di Benua Asia dan Benua
                lainya, termasuk lokasi, iklim, bentuk muka bumi, geologi, flora
                dan fauna, serta kondisi penduduk.
              </li>
              <li>
                Siswa mampu menyebutkan berbagai potensi Sumber Daya Alam
                seperti jenis sumber daya, penyebaran di darat dan laut di Benua
                Asia dan Benua Lainnya.
              </li>
              <li>
                Siswa mampu menyebutkan Sumber Daya Manusia di Benua Asia dan
                Benua Lainnya, misalnya jumlah, sebaran, komposisi, pertumbuhan,
                dan kualitas.
              </li>
              <li>
                Siswa mampu menyebutkan bentuk distribusi potensi wilayah Benua
                Asia dan Benua Lainnya.
              </li>
              <li>
                Siswa mampu menyebutkan dampak interaksi antarruang terkait
                perdagangan dan mobilitas penduduk.
              </li>
            </ol>
          </div>
        </LearningContent>
      </Layout>
    </>
  );
};

export default TujuanPembelajaran;
