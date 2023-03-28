import Carousel from "./Carousel";
import Card from "./Card";
import CardKegiatan from "./Cardkegiatan";
import image3 from "../asset/card1.jpg";
import image4 from "../asset/card2.jpg";
import image5 from "../asset/card3.jpg";
import image6 from "../asset/card4.jpg";
import image7 from "../asset/card5.jpeg";
import image8 from "../asset/card6.jpeg";

const maincontent = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <h2 className="text-center my-5">JURUSAN SEKOLAH</h2>
        <div className="row my-5 justify-content-center">
          <div className="col-lg-4 col-12">
            <Card image={image3} judul="TATA BOGA" />
          </div>
          <div className="col-lg-4 col-12">
            <Card image={image4} judul="TEKNIK JARINGAN" />
          </div>
          <div className="col-lg-4 col-12">
            <Card image={image5} judul="AKUNTANSI PERKANTORAN" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center my-5">KEGIATAN SEKOLAH</h2>
        <div className="row">
          <div className="col-12 my-3">
            <CardKegiatan image={image6} judul="KEGIATAN ROHANI" />
          </div>
          <div className="col-12 my-3">
            <CardKegiatan image={image7} judul="PRAMUKA" />
          </div>
          <div className="col-12 my-3">
            <CardKegiatan image={image8} judul="OLAHRAGA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default maincontent;
