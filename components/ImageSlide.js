
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlide({data}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(
    <div className="flex flex-row items-center w-full justify-center space-x-10 overflow-x-scroll">
      <Slider {...settings}>

      {
        data.map(i=>(
          <div key={i} className="pt-2  shadow-2xl hover:shadow-inner shadow-slate-900/60 rounded overflow-hidden w-64 text-center">
           {i.h1 && <h2 className="font-normal text-lg tracking-wider py-1">{i.h1}</h2>}
            <div className="w-full overflow-hidden bg-black relative group ">
              <div className="w-full h-full absolute top-0 left-0 transition-all duration-500 bg-gradient-to-br from-pink-500 group-hover:opacity-50 opacity-0 z-50 to-teal-500"></div>
            <img src={i.link} className="mx-auto group-hover:scale-110 transition-transform duration-200 ease-in-out opacity-80 hover:opacity-90  w-full object-cover h-44"></img>
            </div>
            {i.h2 && <h3 className="py-2 tracking-wider mb-2">{i.h2}</h3>}
            <div className="text-transparent h-[4px] bg-gradient-to-br from-green-500 to-teal-600">.</div>
          </div>
        ))
      }
      </Slider>
    </div>
  );
}