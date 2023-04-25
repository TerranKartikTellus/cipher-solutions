import ImageSlide from "./ImageSlide";

export default function KidsAndFamily(){
const data=[
  {
    h1: "",
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/5c4ec7fce11c2landscaped_greens.png",
    h2: "Landscaped Greens"
  },
  {
    h1: "",
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/5c4ec816040aea-5.jpg",
    h2: "Horticulture Park"
  },
  {
    h1: "",
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/5c4ec829beed0a-2.png",
    h2: "Children Play Area"
  },
  {
    h1: "",
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/FreeLegalAdviceImage.png",
    h2: "Free Legal Advise"
  },
  {
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/5e1ff313d6b66WhatsApp-Image-2020-01-15-at-10.13.17-PM.jpeg",
    h2:"Club Facilities"
  },{
    link: "https://amal2.shinz.info/RWAVendor/amenities_image/604c798937297IMG_20210225_122702(2).jpg",
    h2: "Parks"
  }
]
  return(
    <div className="pt-14 h-auto">
      {/* <div className="h-[60px]">.</div> */}
      <div className="w-10/12 mx-auto">
        <h2 className="text-center font-bold text-4xl my-5 ">KIDS AND FAMILY</h2>
        <div>
          <ImageSlide data={data}></ImageSlide>
        </div>
      </div>
    </div>
  );
}