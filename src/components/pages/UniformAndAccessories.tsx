import React, { FC, useState } from "react";
import gamSkullUniforms from "./uniforms";
import accessories from "../accessories";

interface UniformItem {
  imageURL: string;
  name: string;
  description: string;
  price: string;
}

const UniformAndAccessories: FC = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAllClick = () => {
    setViewAll(!viewAll);
  };

  const [showAll, setShowAll] = useState(false);

  const handleShowAllClick = () => {
    setShowAll(!showAll);
  }

  return (
    <div className="pt-10 bg-[#F4F3F3]">
      {/* Hero section */}
      {/* background image */}
      <div
        className="h-[50%] bg-no-repeat bg-cover "
        style={{ backgroundImage: "url('/bg-uniform.jpg')" }}
      ></div>
      {/* the top part of the code */}
      <div>
        <h1 className=" text-sky-700 flex flex-wrap text-5xl font-bold text-center justify-center mt-20">
          Back-to-School Essentials
        </h1>

        <h1 className=" text-sky-700 flex flex-wrap text-5xl font-bold text-center justify-center mt-4">
          Shop Uniforms & Accessories Now
        </h1>

        <p className=" flex flex-wrap text-xl font-bold text-center justify-center mt-5">
          Get exclusive offers on purchase of any plans
        </p>
      </div>
      
      {/* Search bar */}
      <div className=" flex mt-10 items-center justify-center ">
        <input
          className="justify-center border-2 border-sky-600 bg-[#F4F3F3] h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
          placeholder="Search Uniforms and Accessories"
          type="text"
        />
      </div>
      {/* Featured Uniforms */}
      <div className="flex flex-wrap justify-between px-14 mt-10 text-xl font-bold ">
        <p>Featured Uniforms </p>
        <p
          onClick={handleViewAllClick}
          className="cursor-pointer hover:text-sky-600"
        >
          {viewAll ? "See Less" : "Explore All"}
        </p>
      </div>
        {/* the items of the uniforms */}
      <div
        className="mx-10"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {gamSkullUniforms
          .slice(0, viewAll ? gamSkullUniforms.length : 4)
          .map((item: any, index: number) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.imageURL}
                alt={item.name}
                className="w-full h-[200px] object-cover"
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                  {item.name}
                </h3>
                <p style={{ color: "#555", fontSize: "14px" }}>
                  {item.description}
                </p>
                <div className="flex justify-between items-center p-2">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "10px 0",
                    }}
                  >
                    {item.price}
                  </p>
                  <button className="bg-sky-600 text-white p-2 rounded-full flex items-center hover:bg-blue-400 shadow-md">
                    Buy
                    <svg
                      className="ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className=" ">
      <div className="flex flex-wrap justify-between px-14 mt-10 text-xl font-bold mb-5">
        <p>Featured Accessories </p>
        <p
          onClick={handleShowAllClick}
          className="cursor-pointer hover:text-sky-600"
        >
          {showAll ? "See Less" : "Explore All"}
        </p>
      </div>
          {/* this is the items for the accessories */}
      <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-10">
            
            {accessories.slice(0, showAll ? accessories.length : 4).map((item : any, index : number ) => (
               <div key={index} className="bg-white rounded-lg shadow-md p-8  ">
                <img src={item.imageURL} alt={item.name} className="w-full h-[50%] object-cover"/>
                <div className="p-4">
                 <h3 className="text-lg font-semibold text-gray-800 ">{item.name}</h3>
                 <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                 <p className="mt-2 text-lg font-semibold text-gray-800">{item.price}</p>
                </div>
               </div>
            ))}
              
          </div>
      </div>

      </div>
    </div>
  );
};

export default UniformAndAccessories;
