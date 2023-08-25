import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const PackagesPage = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <div className='absolute text-center'>
                    <h1>Enjoy your days with 72+ cool packages</h1>
                </div>
                <Image src='/images/banner.jpg' alt='hero' width={1920} height={1000} className='w-full h-full' />
                <div className='px-3 lg:px-5 2xl:px-0 h-[70px] md:h-[100px] lg:h-[130px] xl:h-[180px] bg-white shadow-lg absolute bottom-0 translate-y-1/2 container left-1/2 -translate-x-1/2 flex justify-center items-center rounded-md'>
                    <div className='w-full lg:px-5 2xl:px-8 grid gird-cols-3 lg:grid-cols-5 gap-5 lg:gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base lg:text-lg font-medium text-accent'>Region</label>
                            {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
                            <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
                                <option disabled selected>Pick your favorite Simpson</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base lg:text-lg font-medium text-accent'>Region</label>
                            {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
                            <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
                                <option disabled selected>Pick your favorite Simpson</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base lg:text-lg font-medium text-accent'>Region</label>
                            {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
                            <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
                                <option disabled selected>Pick your favorite Simpson</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-base lg:text-lg font-medium text-accent'>Region</label>
                            {/* <input className='px-3 py-1 bg-slate-100 outline-none rounded-md text-sm' placeholder='Select Region'/> */}
                            <select className="px-3 py-2 bg-slate-100 outline-none rounded-md text-sm ">
                                <option disabled selected>Pick your favorite Simpson</option>
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesPage;

PackagesPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};