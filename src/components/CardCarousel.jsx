import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons.jsx'

const CardCarousel = ({ cards, customClasses }) => {
  const options = { loop: true }
  const SLIDE_COUNT = cards.length
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)
  return (
    <div className={`embla ${customClasses}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container card-embla__container mb-9 flex touch-pan-y">
          {slides.map((index) => (
            <div className="card-embla__slide min-w-0" key={index}>
              <div className="card-embla__slide__card">{cards[index]}</div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}

export default CardCarousel
