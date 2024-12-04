import React, { useState } from "react";
import PopularDish from "../components/PopularDish";
import "../customstyles/scrollbar.css";
import OrderList from "../components/OrderList";
import PaymentList from "../components/PaymentList";
import CreateOrder from "../components/CreateOrder";
const Dashboard = () => {
  const [createOrder, setCreateOrder] = useState(false);
  return (
    <div className="bg-gray-100 h-screen custom-scroll">
      <div className="flex flex-row items-center p-3 justify-between">
        <h4 className="text-xl font-semibold font-roboto">
          Nice! We have a lot of orders🥙
        </h4>
        <p className="font-roboto text-sm">Wednesday, 03 December 2023</p>
      </div>
      <div className="p-3 flex flex-row">
        <div className="flex-1">
          {/*first Side */}
          <div className="flex flex-row">
            {/*New orders */}
            <div className="bg-teal-600 p-2 flex flex-col  w-40 flex-1 m-1 h-32 rounded-lg">
              <div className="flex-1 flex-row flex justify-between">
                <p className="font-roboto font-medium text-white">New Orders</p>
                <img
                  src="images/notification.png"
                  alt=""
                  className="w-10 h-10 p-1 bg-white rounded-lg"
                />
              </div>
              <p className="text-xl text-white font-roboto">16</p>
              <p className="font-roboto text-white text-xs">
                Updated every new order
              </p>
            </div>
            <div className="bg-white flex flex-col  rounded-lg flex-1 p-2 w-40 h-32 m-1">
              <div className="flex-1 flex-row flex justify-between">
                <p className="font-roboto font-medium ">Total Orders</p>
                <img
                  src="images/orders.png"
                  alt=""
                  className="w-10 h-10 p-1 bg-teal-100 rounded-lg"
                />
              </div>
              <h4 className="font-roboto font-medium text-2xl">86</h4>
              <p className="font-roboto font-medium text-xs">
                +2.5% <span>than usual</span>
              </p>
            </div>
            <div className="bg-white rounded-lg flex flex-col flex-1 p-2 w-40 h-32 m-1">
              <div className="flex-1 flex flex-row justify-between">
                <p className="font-roboto font-medium">Waiting list</p>
                <img
                  src="images/waiting.png"
                  alt=""
                  className="w-10 h-10 p-1 bg-orange-100 rounded-lg"
                />
              </div>
              <p className="font-roboto font-medium font-2xl">9</p>
              <p className="font-roboto text-xs font-medium">
                +2.5% <span>than usual</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-1  ">
            {/*Order List */}
            <div className="p-2 flex-1 m-1 bg-white overflow-y-scroll custom-scroll h-96  rounded-xl">
              <div className="sticky top-0 bg-white ">
                <h4 className="font-roboto font-medium">Order List</h4>
                <div className="flex  flex-row items-center mt-1 p-1 rounded-md bg-gray-200">
                  <input
                    type="text"
                    placeholder="Search a Order"
                    className="outline-none flex-1 bg-gray-200"
                  />
                  <img src="images/search.png" alt="" className="w-4" />
                </div>
              </div>

              <div className="mt-2 ">
                <OrderList status={"ready"} />
                <OrderList status={"in_progress"} />
                <OrderList status={"in_progress"} />
                <OrderList status={"in_progress"} />
                <OrderList status={"completed"} />
                <OrderList status={"completed"} />
                <OrderList status={"completed"} />
              </div>
            </div>
            {/*Payment */}
            <div className=" flex-1 m-1 bg-white overflow-y-auto custom-scroll h-96 rounded-xl">
              <div className="sticky top-0 bg-white p-2">
                <h4 className="font-roboto font-medium">Order List</h4>
                <div className="flex flex-row items-center mt-1 p-1 rounded-md bg-gray-200">
                  <input
                    type="text"
                    placeholder="Search a Order"
                    className="outline-none flex-1 bg-gray-200"
                  />
                  <img src="images/search.png" alt="" className="w-4" />
                </div>
              </div>

              <div className="mt-2">
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
                <PaymentList />
              </div>
            </div>
          </div>
        </div>
        <div>
          {/*Second Side */}
          <div>
            <button
              className="bg-yellow-400 p-2 w-72 flex flex-row justify-center items-center rounded-md"
              onClick={() => setCreateOrder(true)}
            >
              <img src="images/plus.png" alt="" className="w-4 mr-1" />
              CREATE NEW ORDER
            </button>
          </div>

          <div className="bg-white p-2 mt-2 h-72 2xl:h-96 rounded-lg">
            <div className="flex flex-row m-1 items-center justify-between">
              <h4 className="font-roboto font-medium">Popular Dishes</h4>
              <p className="text-teal-800 font-roboto font-bold text-xs">
                View All
              </p>
            </div>
            <div className="flex flex-row items-center">
              <p className="m-1 text-xs text-slate-500">Rank</p>
              <p className="m-1 text-xs text-slate-500">Name</p>
            </div>
            <PopularDish />
            <PopularDish />
            <PopularDish />
            <PopularDish />
            <PopularDish />
          </div>
          <div className="bg-white p-2 mt-2 h-56 2xl:h-96 overflow-y-scroll custom-scroll rounded-lg">
            <div className="flex flex-row m-1 items-center justify-between">
              <h4 className="font-roboto font-medium">Out of Stock</h4>
              <p className="text-teal-800 font-roboto font-bold text-xs">
                View All
              </p>
            </div>
            <PopularDish />
            <PopularDish />
            <PopularDish />
            <PopularDish />
            <PopularDish />
          </div>
        </div>
      </div>
      {createOrder && <CreateOrder setCreateOrder={setCreateOrder}/>}
    </div>
  );
};

export default Dashboard;
