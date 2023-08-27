"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-5">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-accent">Book Now</h1>
            <form className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Name *</label>
                        <input type="text" name="name" className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email *</label>
                        <input type="text" name="email" className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm" placeholder="Your Email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Phone *</label>
                        <input type="text" name="name" className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm" placeholder="Phone" />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <label htmlFor="email" className="text-sm font-medium">Date *</label>
                        <DatePicker
                            className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm"
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Number of Ticket *</label>
                        <input type="number" name="ticket" className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm" placeholder="0" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Total Guests *</label>
                        <input type="text" name="email" className="w-full border border-gray-300 rounded-md px-4 h-10 outline-none text-sm" placeholder="Guests" />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <textarea name="message" className="w-full border border-gray-300 rounded-xl px-4 pt-3 outline-none text-sm min-h-[80px]" placeholder="Type here..." />
                </div>
                <button className='bg-secondary px-4 py-2 lg:px-5 lg:py-3 mt-2 hover:bg-primary duration-300 text-xs font-semibold uppercase tracking-widest text-white rounded-full'>Book Now</button>
            </form>
        </div>
    );
};

export default BookingForm;