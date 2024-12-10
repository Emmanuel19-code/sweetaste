import React from "react";

const FoodMenu = ({ type, id, selected, setSelected }) => {
  const handleClick = () => {
    setSelected(type);
  };

  return (
    <div
      className={`${
        selected === type ? "bg-yellow-400" : "bg-white"
      } p-2 m-2 flex flex-col justify-between w-44 h-24 rounded`}
      onClick={handleClick}
    >
      <h4 className="text-lg font-medium font-nunito">{type}</h4>
      <p className="text-sm text-gray-500 font-roboto">124 Items</p>
    </div>
  );
};

export default FoodMenu;
