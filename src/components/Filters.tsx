import React from "react";

function Filters() {
  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 flex flex-row items-center">
        <p className="pl-4">Filter by name...</p>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 flex flex-row items-center">
        <p className="pl-4">Species</p>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 flex flex-row items-center">
        <p className="pl-4">Gender</p>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 flex flex-row items-center">
        <p className="pl-4">Status</p>
      </div>
    </div>
  );
}

export default Filters;
