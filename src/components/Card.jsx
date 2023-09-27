import { Heart, ShoppingCart } from 'lucide-react'
import { AddCartFunc, AddFavoriteFunc } from './Card-Function'
import RenderStars from './CardRating'
import { useNavigate } from 'react-router-dom'

const Card = ({ heading, companyName, price, rating, image, isFavoriteState, isCartState }) => {
  const navigate = useNavigate()
  const { isCart, handleCartClick } = AddCartFunc(isCartState)
  const { isFavorite, handleFavoriteClick } = AddFavoriteFunc(isFavoriteState)

  return (
    <>
      {/* card */}
      <div className="my-card flex  flex-col rounded-xl border p-2">
        {/* image */}
        <div className="relative flex cursor-pointer items-center justify-center rounded-xl">
          <div
            onClick={() => {
              navigate(`/product/productID`)
            }}
            className="h-[10.4vw]  w-[15vw] overflow-hidden rounded-lg ">
            <img
              src={image}
              alt="Cards"
              className="h-full w-full transform rounded-lg object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* favorite / heart icon */}
          </div>
          <div
            onClick={handleFavoriteClick}
            className={`absolute right-2 top-2 z-50 cursor-pointer`}>
            <Heart
              color={`${isFavorite ? 'red' : 'white'}`}
              fill={`${isFavorite ? 'red' : 'gray'}`}
            />
          </div>
        </div>

        <div className="my-4 flex h-[85px] flex-col justify-between px-1">
          {/* Heading and price */}
          <div className="flex flex-col justify-between gap-1 ">
            <span className="text-xl font-bold">{heading}</span>
            <div className="flex justify-between">
              <span className="font-semibold text-neutral-400">{companyName}</span>
              <RenderStars rating={rating} />
            </div>
          </div>

          {/* Rating Stars & Reviews */}
          <div className="flex h-3 w-full items-center justify-between">
            <button onClick={handleCartClick} className={`w-12`}>
              <ShoppingCart color={`${isCart ? 'green' : 'hotPink'}`} />
            </button>
            <span className="text-lg font-bold ">&#x20B9;{price}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
