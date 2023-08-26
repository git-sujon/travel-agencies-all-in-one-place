import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';
import PackagesFiltering from '@/components/UI/packagesFiltering/PackagesFiltering';

const PackagesPage = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <div className='absolute text-center w-full h-full pt-[20vh]'>
                    <h1 className='text-2xl lg:text-5xl font-bold font-serif text-white max-w-[600px] mx-auto'>Enjoy your days with 72+ cool packages</h1>
                </div>
                <Image src='/images/banner.jpg' alt='hero' width={1920} height={1000} className='w-full h-full' />
                <div className='px-3 lg:px-5 2xl:px-0 h-[70px] md:h-[100px] lg:h-[130px] xl:h-[180px] bg-white shadow-lg absolute bottom-0 translate-y-1/2 container left-1/2 -translate-x-1/2 flex justify-center items-center rounded-md'>
                    <PackagesFiltering></PackagesFiltering>
                </div>
            </div>
        </div>
    );
};

export default PackagesPage;

PackagesPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};