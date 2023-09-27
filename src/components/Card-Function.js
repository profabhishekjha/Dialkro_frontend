import { useState } from 'react'
import { toast } from 'react-hot-toast'

// ------------Add to Favorite function--------------------------------------

export function AddCartFunc(isCartState) {
  const [isCart, setIsCart] = useState(isCartState || false)
  const handleCartClick = () => {
    setIsCart((prev) => !prev)
    if (!isCart) {
      toast.success('Added to Cart! 🛒')
    } else {
      toast.success('Removed from Cart! 🛒')
    }
  }

  return { isCart, handleCartClick }
}

// ------------Add to Favorite function--------------------------------------

export function AddFavoriteFunc(isFavoriteState) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteState || false)

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev)
    if (!isFavorite) {
      toast.success('Added to Favorites! 💖')
    } else {
      toast.success('Removed from Favorites! 💔')
    }
  }

  return { isFavorite, handleFavoriteClick }
}
