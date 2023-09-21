import React, { useState, useEffect } from 'react'

function RandomStar() {
  const [rating, setRating] = useState(null)

  useEffect(() => {
    // Generate a random rating between 1 and 5 when the component mounts.
    const randomRating = Math.floor(Math.random() * 5) + 1
    setRating(randomRating)
  }, [])

  const renderStars = () => {
    if (rating !== null) {
      return '⭐'.repeat(rating)
    } else {
      return 'No rating available'
    }
  }
  return (
    <div>
      <p>{renderStars()}</p>
    </div>
  )
}

export default RandomStar
