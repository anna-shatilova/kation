import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './carousel.css'


export const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(()=> {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
 }, [images.length])

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
    <div className="carousel-images">
    <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={imageVariants}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </AnimatePresence>
    <div className="slide_direction">
    <div className="left" onClick={handlePrevious}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 96 960 960"
        width="20"
      >
        <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
      </svg>
    </div>
    <div className="right" onClick={handleNext}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 96 960 960"
        width="20"
      >
        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
      </svg>
    </div>
  </div>

</div>
  <div className="carousel-indicator">
  {images.map((_, index) => (
    <div
      key={index}
      className={`dot ${currentIndex === index ? "activ" : ""}`}
      onClick={() => handleDotClick(index)}
    ></div>
  ))}
</div>
</div>
  )
}
