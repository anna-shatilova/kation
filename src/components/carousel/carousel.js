import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './carousel.css'


export const Carousel = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isImageLoading, setImageLoading] = useState(true);

  useEffect(()=> {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
 }, [images.length])

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div>
    <div className="carousel-images">
    <AnimatePresence>
        <div style={{ position: 'absolute', top: '-9999px', overflow: 'hidden' }}>
          <img src={images[(currentIndex + 1) % images.length]} alt="preload" />
        </div>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
    </AnimatePresence>
          {/* <AnimatePresence initial={false}>
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            onLoad={() => setImageLoading(false)}
          />
        ))}
      </AnimatePresence> */}
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
      className={`dot ${currentIndex === index ? "active" : ""}`}
      onClick={() => handleDotClick(index)}
    ></div>
  ))}
</div>
</div>
  )
}

