import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';
import PackagesFiltering from '@/components/UI/packagesFiltering/PackagesFiltering';
import PackageCard from '@/components/UI/packageCard/PackageCard';


const packages = [
    {
        id: 1,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '2 Days 1 Nights',
        price: 1300,
        region: 'Asia',
        alreadyBooked: 13,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
    {
        id: 2,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '3 Days 2 Nights',
        price: 15000,
        region: 'Asia',
        alreadyBooked: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
    {
        id: 3,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '5 Days 4 Nights',
        price: 11000,
        region: 'Asia',
        alreadyBooked: 9,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
    {
        id: 4,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '3 Days 2 Nights',
        price: 2500,
        region: 'Asia',
        alreadyBooked: 12,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
    {
        id: 5,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '2 Days 1 Nights',
        price: 12000,
        region: 'Asia',
        alreadyBooked: 19,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
    {
        id: 6,
        title: 'Sri Lanka',
        image: 'https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg',
        duration: '6 Days 5 Nights',
        price: 3000,
        region: 'Asia',
        alreadyBooked: 16,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        rating: 5,
        date: '2021-09-01'
    },
]



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
            <div className='max-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-10 my-20 lg:mt-44 '>
                {
                    [1,2,3,4,5,6].map((item, index) => <PackageCard key={index}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default PackagesPage;

PackagesPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};