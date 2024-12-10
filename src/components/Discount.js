import React from 'react'

const Discount = ({percent}) => {
  return (
    <div className="bg-red-500 flex flex-row items-center rounded-lg px-2 ">
      <img
        src="images/discount.png"
        alt=""
        className="w-3 filter brightness-0 invert mr-1"
      />
      <p className="text-xs text-white font-nunito text-xxs font-medium">
        Disc <span>{percent}</span>
      </p>
    </div>
  )
}

export default Discount
