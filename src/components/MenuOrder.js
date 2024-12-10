import React from 'react'

const MenuOrder = () => {
  return (
    <div className="border-b m-1 p-1">
            <div className="flex flex-row justify-between">
              <div>
                <h4 className="font-medium font-roboto text-sm">Scrambled eggs with toast</h4>
                <p className="text-xs text-gray-500">
                  Extra: <span>Extra Egg </span>
                </p>
                <p className="text-xs text-gray-500 italic">Note: <span>make the dish a bit spicy</span></p>
              </div>
              <p>x1</p>
            </div>
            <div>
                <p className="text-sm font-medium font-roboto">$16.99</p>
            </div>
          </div>
  )
}

export default MenuOrder
