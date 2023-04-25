import ImageSlide from "./ImageSlide";

export default function Homes(){
const data=[
  {
    h1: "BUY/SELL",
    link: "https://amal2.shinz.info/Homes/slide_11.jpg",
    h2: "Available: 6/Wanted: 5"
  },
  {
    h1: "RENTALS",
    link: "https://amal2.shinz.info/Homes/Home_3.jpeg",
    h2: "Available: 4/Wanted: 7"
  },
  {
    h1: "REAL ESTATE AGENT",
    link: "https://amal2.shinz.info/Homes/rentals.jfif",
    h2: "Available: 10"
  },
  {
    h1: "INTERIOR DESIGNER",
    link: "https://amal2.shinz.info/Homes/slide22.jpg",
    h2: "Available: 3"
  },
]
  return(
    <div className="pt-14 h-auto">
      <div className="h-[560px]">.</div>
      <div className="w-10/12 mx-auto">
        <h2 className="text-center font-bold text-4xl">MYRWA HOMES</h2>
        <div className="text-sm hover:underline text-blue-600 text-right"><a href="/">+ Add your free listing*  </a></div>
        <div className="text-sm hover:underline text-blue-600 text-right"><a href="/">Share Link </a></div>
        <div>
          <ImageSlide data={data}></ImageSlide>
        </div>
      </div>
    </div>
  );
}