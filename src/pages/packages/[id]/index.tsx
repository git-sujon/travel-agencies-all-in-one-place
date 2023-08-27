import BookingForm from '@/components/UI/bookingForm/BookingForm';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const PackagesDetails = () => {
    return (
        <div className='max-container min-h-screen grid md:grid-cols-2 pt-8 gap-10 justify-items-center'>
            <div className='w-full flex flex-col items-center'>
                <Image src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg" alt="package banner" width={500} height={500} />
                <div className='mt-8'>
                    <BookingForm></BookingForm>
                </div>
            </div>
            <div className='w-full'>
                <h1 className='text-xl md:text-2xl font-bold text-accent mb-3'>Lake Panama</h1>
                <div className='space-y-3'>
                    <p className='text-lg border-b font-medium text-gray-700'>Location: <span className='text-base text-gray-600'>Sri Lanka</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Duration: <span className='text-base text-gray-600'>2 Days 1 Night</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Guests: <span className='text-base text-gray-600'>Max 2</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Package Type: <span className='text-base text-gray-600'>Premium</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Transport: <span className='text-base text-gray-600'>Flight</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Guide Name: <span className='text-base text-gray-600'>John Doe</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Price: <span className='text-base text-gray-600'>BDT 13,500</span></p>
                    <p className='text-lg border-b font-medium text-gray-700'>Description: <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab dicta sapiente magnam placeat soluta corrupti qui ea asperiores. Incidunt soluta assumenda quod temporibus consequatur suscipit consequuntur non iure quas! Obcaecati enim, cupiditate similique harum aut sint ut expedita nobis!dicta sapiente magnam placeat soluta corrupti qui ea asperiores. Incidunt soluta assumenda quod temporibus consequatur suscipit consequuntur non iure quas! Obcaecati enim, cupiditate similique harum aut sint ut expedita nobis!</span></p>
                </div>
            </div>
        </div>
    );
};

export default PackagesDetails;

PackagesDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};