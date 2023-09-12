import React, { useCallback } from 'react'
import './style.css'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx'
import Autoplay from 'embla-carousel-autoplay'

const BannerCarousel = ({ images, customClasses }) => {
  const options = { loop: true }
  const SLIDE_COUNT = images.length
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const imageByIndex = (index) => images[index % images.length]

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    if (autoplay.options.stopOnInteraction === false) autoplay.stop()
  }, [])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onButtonClick)

  return (
    <div className={`embla relative pt-10 ${customClasses}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container banner-embla__container flex cursor-grab touch-pan-y active:cursor-grabbing">
          {slides.map((index) => (
            <div className="banner-embla__slide min-w-0" key={index}>
              <img
                className="banner-embla__slide__img block w-full  object-cover pt-8"
                src={imageByIndex(index)}
                alt="Carousel Images"
              />
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}

export default BannerCarousel
