/* eslint-disable react/prop-types */
import React from 'react'

const Image = ({ image, customclass, children }) => {
  return (
    <div>
      <img src={image} alt="logo" className={customclass} />
      {children}
    </div>
  )
}

export default Image
