import React, { useState } from 'react';

function Filters() {
  const [speciesDropDown, setSpeciesDropDown] = useState(false);
  const [genderDropDown, setGenderDropDown] = useState(false);
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [speciesFilter, setSpeciesFilter] = useState('Species');
  const [genderFilter, setGenderFilter] = useState('Gender');
  const [statusFilter, setStatusFilter] = useState('Status');

  const species = ['Human', 'Alien', 'Mythical'];
  const gender = ['Male', 'Female'];
  const status = ['Alive', 'Dead'];

  const handleSpeciesDropDownClick = () => {
    setSpeciesDropDown(!speciesDropDown);
  };
  const handleGenderDropDownClick = () => {
    setGenderDropDown(!genderDropDown);
  };
  const handleStatusDropDownClick = () => {
    setStatusDropDown(!statusDropDown);
  };

  const ChangeSpeciesFilter = (item) => {
    setSpeciesFilter(item.target.innerText);
    setSpeciesDropDown(false);
  };
  const ChangeGenderFilter = (item) => {
    setGenderFilter(item.target.innerText);
    setGenderDropDown(false);
  };
  const ChangeStatusFilter = (item) => {
    setStatusFilter(item.target.innerText);
    setStatusDropDown(false);
  };

  return (
    <div className="flex flex-row justify-between gap-4">
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400">
        <input
          className="pl-4 w-full h-full rounded-md"
          placeholder="Filter by name..."
        />
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 relative inline-block pt-2">
        <p onClick={handleSpeciesDropDownClick} className="pl-4">
          {speciesFilter}
        </p>
        <div
          id="myDropdown"
          className={
            speciesDropDown
              ? 'w-full absolute z-10 pt-4'
              : 'hidden w-full absolute z-10 pt-4'
          }
        >
          {species.map((item, index) => (
            <p
              key={index}
              className="block w-full h-10 bg-white pl-4"
              onClick={(item) => ChangeSpeciesFilter(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 relative inline-block pt-2">
        <p onClick={handleGenderDropDownClick} className="pl-4">
          {genderFilter}
        </p>
        <div
          id="myDropdown"
          className={
            genderDropDown
              ? 'w-full absolute z-10 pt-4'
              : 'hidden w-full absolute z-10 pt-4'
          }
        >
          {gender.map((item, index) => (
            <p
              key={index}
              className="block w-full h-10 bg-white pl-4"
              onClick={(item) => ChangeGenderFilter(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 relative inline-block pt-2">
        <p onClick={handleStatusDropDownClick} className="pl-4">
          {statusFilter}
        </p>
        <div
          id="myDropdown"
          className={
            statusDropDown
              ? 'w-full absolute z-10 pt-4'
              : 'hidden w-full absolute z-10 pt-4'
          }
        >
          {status.map((item, index) => (
            <p
              key={index}
              className="block w-full h-10 bg-white pl-4"
              onClick={(item) => ChangeStatusFilter(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
