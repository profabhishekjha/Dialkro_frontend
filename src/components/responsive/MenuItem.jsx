/* eslint-disable react/prop-types */
import React from 'react'

function MenuItem({ onClick, label }) {
  return (
    <div onClick={onClick} className="px-4 py-3 font-semibold transition hover:bg-neutral-100">
      {label}
    </div>
  )
}

export default MenuItem
