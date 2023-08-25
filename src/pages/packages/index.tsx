import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const PackagesPage = () => {
    return (
        <div className='w-full'>
            <div>
                <Image src='/images/banner.jpg' alt='hero' width={1920} height={1000} className='w-full h-full' />
            </div>
        </div>
    );
};

export default PackagesPage;

PackagesPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};