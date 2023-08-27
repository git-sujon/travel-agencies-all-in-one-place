import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackagesFiltering = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="w-full lg:px-5 2xl:px-8 grid gird-cols-3 lg:grid-cols-5 gap-5 lg:gap-8">
      <div className="flex flex-col gap-2">
        <label className="text-base lg:text-lg font-medium text-accent">
          Region
        </label>
        {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
        <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
          <option disabled selected>
            Select Region
          </option>
          <option>Bangladesh</option>
          <option>Sri-Lanka</option>
          <option>Thailand</option>
          <option>Europe</option>
          <option>Mal-dives</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base lg:text-lg font-medium text-accent">
          Duration
        </label>
        {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
        <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
          <option disabled selected>
            Select Duration
          </option>
          <option>1Days 1Night</option>
          <option>2Days 2Night</option>
          <option>3Days 2Night</option>
          <option>5Days 4Night</option>
          <option>10Days 10Night</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base lg:text-lg font-medium text-accent">
          Date
        </label>
        {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
        <DatePicker
          className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm w-full"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-base lg:text-lg font-medium text-accent">
          Guests
        </label>
        <input
          className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm"
          placeholder="Number of Guest"
        />
      </div>
      <div className="flex w-full h-full items-center justify-center">
        <button className="px-3 h-fit py-2 w-full bg-secondary hover:bg-primary duration-300 mt-7 rounded-md font-semibold text-white tracking-widest">
          Search
        </button>
      </div>
    </div>
  );
};

export default PackagesFiltering;
