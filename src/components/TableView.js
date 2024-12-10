import React from 'react'

const TableView = () => {
  return (
    <div className={`w-44 h-44 bg-yellow-50 p-2 flex flex-col justify-center items-center m-1 rounded-xl`}>
              <div className={`flex flex-col justify-center items-center flex-1`}>
                <p className={`bg-yellow-300 text-white py-1 rounded-full w-16 text-center`}>
                  T -01
                </p>
                <p className="text-sm font-inter  mt-2">Emma: 2 Guests</p>
              </div>
              <p className="text-sm font-inter text-gray-400">09:00 AM</p>
            </div>
  )
}

export default TableView
