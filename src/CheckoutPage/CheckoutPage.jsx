import { useState } from 'react'
import { generateCartProductsData } from './CartFunc'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const cartProducts = generateCartProductsData()
  const [totalPrice, setTotalPrice] = useState(5000)

  const [updateDetails, setUpdateDetails] = useState(false)
  const [updateAddress, setUpdateAddress] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')

  return (
    <>
      <Nav />
      <main className="  mx-20 flex flex-col">
        <h1 className="mb-10 mt-[10vh] text-3xl font-bold">Shopping Cart</h1>
        {cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            productCompanyName={product.companyName}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
            productColor={product.color}
            productSize={product.size}
            productStockQuantity={product.StockQuantity}
            setTotalPrice={setTotalPrice}
          />
        ))}
        <div className="  mt-10 flex flex-wrap justify-end gap-10">
          <div className=" flex h-28 flex-1  items-center justify-between gap-20 rounded-3xl border px-5">
            <div className="flex items-center justify-between">
              <span className="mr-2 inline w-[100px] text-xl font-bold">Phone no:</span>
              <input
                id="phone"
                type="number"
                placeholder="Phone no."
                disabled={!updateDetails}
                value={updatePhone}
                onChange={(e) => setUpdatePhone(e.target.value)}
                className="flex-1 rounded-md border bg-slate-100 px-5 py-2 text-lg font-semibold"
              />
            </div>

            <div className=" h-20 border" />

            <div className=" flex w-full items-center gap-2">
              <span className="mr-2 inline w-[100px] text-xl font-bold">Address:</span>
              <input
                id="address"
                type="address"
                placeholder="Address"
                disabled={!updateDetails}
                className="flex-1  rounded-md border bg-slate-100 px-5 py-2 text-lg font-semibold"
                value={updateAddress}
                onChange={(e) => setUpdateAddress(e.target.value)}
              />
            </div>

            <div className="h-20 border" />

            <div className=" flex w-[12vw] justify-center">
              <button
                onClick={() => setUpdateDetails(!updateDetails)}
                className="w-40 rounded-md bg-[#4895ef] py-2 font-semibold text-white">
                {updateDetails ? 'Update' : 'Edit Details'}
              </button>
            </div>
          </div>

          <div className=" flex h-28 w-[25vw] items-center rounded-3xl border px-5">
            {/* Place your order */}
            <div className=" flex w-[12vw] justify-center">
              <Link href={'/paymentGateway'}>
                <button className="w-40 rounded-md bg-[#f77f00] py-2 font-semibold text-white">
                  place order
                </button>
              </Link>
            </div>

            {/* Total Price */}
            <div className="flex w-[9vw] flex-col items-center  border-l">
              <span className="text-lg font-semibold">Total Price</span>
              <span className="text-sm font-semibold text-gray-400">{` + (Shipping Charges)`}</span>
              <span className="mt-3 text-lg font-medium">&#x20B9;{totalPrice}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CheckoutPage

// ------------------------------------------------------------------

import { Trash } from 'lucide-react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'

export const CartProduct = ({
  productCompanyName,
  productImage,
  productName,
  productPrice,
  productColor,
  productSize,
  productStockQuantity,
  setTotalPrice
}) => {
  return (
    <>
      <div className="flex  gap-10">
        {/* Delete icon and logic  */}
        <div className="">
          <Trash color="red" />
        </div>
        {/* Image */}
        <img src={productImage} className="aspect-square h-[100px] rounded-md" alt="FakeImage" />

        {/* content */}
        <div className="flex w-full flex-col">
          <span className="font-semibold">{productCompanyName}</span>
          <span className="text-xl font-bold">{productName}</span>
          <div className="flex gap-5">
            <div className="flex items-center  gap-1">
              <div className={`h-4 w-4 rounded-full  bg-${productColor}-500`}></div>
              <span className="text-lg ">{productColor}</span>
            </div>
            <span className="text-lg ">{productSize}</span>
            <span className="text-lg ">&#x20B9;{productPrice}</span>
          </div>
        </div>
        {/* Quantity and Price */}
        <div className="mx-10 border-r" />
        <ProductQuantity
          setTotalPrice={setTotalPrice}
          productPrice={productPrice}
          productStockQuantity={productStockQuantity}
        />
      </div>
      {/* <Separator className="mb-16 mt-5" /> */}
      <div className="mb-16 mt-5 border-b" />
    </>
  )
}

//  ------------------------------------------------------------------

export const ProductQuantity = ({ productStockQuantity, productPrice, setTotalPrice }) => {
  const ProductStock = productStockQuantity
  const [quantity, setQuantity] = useState(1)

  const updateTotalPrice = (newQuantity) => {
    setQuantity(newQuantity)
    const newTotalPrice = productPrice * newQuantity
    setTotalPrice((prev) => prev + newTotalPrice)
  }

  return (
    <>
      <div className="mt- flex w-[200px] flex-col gap-2">
        <span className="text-lg font-semibold">Quantity</span>
        <div className="flex items-center rounded-md border">
          <button
            className="flex w-10 items-center justify-center border-r text-xl font-semibold"
            onClick={() => quantity > 1 && updateTotalPrice(quantity - 1)}>{`-`}</button>
          <span className=" flex w-10 items-center justify-center text-xl font-semibold">
            {quantity}
          </span>
          <button
            className=" flex w-10 items-center justify-center border-l text-xl font-semibold"
            onClick={() => quantity < ProductStock && updateTotalPrice(quantity + 1)}>{`+`}</button>
        </div>
      </div>
      <div className="mx-10 border-r" />
      {/* Total Price */}
      <div className="flex w-[200px] flex-col items-start gap-2 ">
        <span className="text-lg font-semibold">Price</span>
        <span className="text-lg font-medium"> &#x20B9;{productPrice * quantity}</span>
      </div>
    </>
  )
}
