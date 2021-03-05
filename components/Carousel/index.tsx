import React, { ReactElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';

export type CarouselType = {
  images: string[];
  showDots?: boolean;
};

function Carousel({ images, showDots }: CarouselType): ReactElement {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const hasPrev = useMemo(() => currentSlide !== 0, [currentSlide]);
  const hasNext = useMemo(() => currentSlide < images.length - 1, [images, currentSlide]);
  const handleClickPrev = useCallback(() => {
    setCurrentSlide((prev) => prev - 1);
  }, [slideRef, currentSlide]);
  const handleClickNext = useCallback(() => {
    setCurrentSlide((prev) => prev + 1);
  }, [slideRef, currentSlide]);
  useEffect(() => {
    if (!slideRef || !slideRef.current) {
      return;
    }
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        {images.map((image) => (
          <Img src={image} alt={image} />
        ))}
      </SliderContainer>
      {hasPrev && <Button onClick={handleClickPrev}>&lt;</Button>}
      {hasNext && (
        <Button align="right" onClick={handleClickNext}>
          &gt;
        </Button>
      )}
      {showDots && (
        <DotsContainer>
          {images.map((_, index) => (
            <Dot active={currentSlide === index} />
          ))}
        </DotsContainer>
      )}
    </Container>
  );
}

Carousel.defaultProps = {
  showDots: false,
};

export default Carousel;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  margin-bottom: -20px;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
`;

const Img = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

type ButtonType = {
  align?: 'left' | 'right';
};

const Button = styled.button<ButtonType>`
  all: unset;
  cursor: pointer;
  color: black;
  background-color: rgb(255, 255, 255, 0.7);
  margin: 0 10px;
  width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ align = 'left' }) => (align === 'left' ? 'left: 0;' : 'right: 0;')}
`;

const DotsContainer = styled.div`
  text-align: center;
  height: 20px;
`;

type DotType = {
  active?: boolean;
};

const Dot = styled.span<DotType>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#0095f6' : '#a8a8a8')};
  margin: 5px 2px;
`;
