import { useState, useEffect } from 'react';
const images = [
  '/img1.png',
  '/img2.png',
  '/img4.png',
];


export default function Image_slider(){
  const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
  }, 3000);
  return () => clearInterval(timer);
}, []);
return (
  <div className='' style={{ position: 'relative', overflow: 'hidden' }}>
    <div
      style={{
        display: 'flex',
        transform: `translateX(${-currentIndex * 100}%)`,
        transition: 'transform 0.5s ease',
      }}
    >
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} style={{ flexShrink: 0, width: '100%' }}  className="rounded-xl border2 border-orange-400/40 opacity-70 object-cover w-full h-[600px]" />
      ))}
    </div>
  </div>
);

}