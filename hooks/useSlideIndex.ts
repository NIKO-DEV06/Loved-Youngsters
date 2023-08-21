import { useState } from "react";
import { StaticImageData } from "next/image";

// Custom hook for managing slide indices
export function useSlideIndex(
  initialIndex: number,
  slideArray: { url: StaticImageData }[]
) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return [currentIndex, prevSlide, nextSlide];
}
