import { useEffect, useState } from 'react'
import FullStar from '/Svgs/FullStar.svg'
import EmptyFullStar from '/Svgs/EmptyFullStar.svg'
import HalfStar from '/Svgs/HalfStar.svg'

const RenderStars = ({ rating }) => {
  const [FullStarNum, setFullStarNum] = useState(0)
  const [emptyFullStarNum, setEmptyFullStarNum] = useState(0)
  const [isHalfStar, setIsHalfStar] = useState(false)

  useEffect(() => {
    function extractRatingParts(rating) {
      const Absolute = Math.floor(rating)
      const Remaining = 5 - Absolute
      const Digit = Math.abs(rating) - Absolute
      return { Absolute, Digit, Remaining }
    }
    const ratingNum = extractRatingParts(rating)
    setFullStarNum(ratingNum.Absolute)
    setEmptyFullStarNum(ratingNum.Remaining)
    ratingNum.Digit > 0 ? setIsHalfStar(true) : setIsHalfStar(false)

    return () => {
      extractRatingParts(rating)
    }
  }, [rating])

  // Full star
  const FullStarLoop = (Num) => {
    const stars = []
    for (let i = 1; i <= Num; i++) {
      stars.push(
        <img key={i} src={FullStar} alt="FullStar" className="h-3 w-3" width={24} height={24} />
      )
    }
    return stars
  }

  // Empty star
  const EmptyFullStarLoop = (Num) => {
    const stars = []
    for (let i = 1; i < Num; i++) {
      stars.push(
        <img
          key={i}
          src={EmptyFullStar}
          alt="FullStar"
          className="h-3 w-3"
          width={24}
          height={24}
        />
      )
    }
    return stars
  }

  return (
    <div className="flex items-center">
      {FullStarLoop(FullStarNum)}
      {isHalfStar && (
        <img src={HalfStar} alt="HalfStar" className="h-3 w-3" width={25} height={25} />
      )}
      {EmptyFullStarLoop(emptyFullStarNum)}
    </div>
  )
}

export default RenderStars
