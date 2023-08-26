import React from 'react';
import { BsStopwatch, BsPerson,BsStarFill } from "react-icons/bs";
import Image from 'next/image';

const PackageCard = () => {
    return (
        <div className=' w-full '>
                    <Image src="https://bonvoyage.qodeinteractive.com/wp-content/uploads/2018/02/tour-2-img-5.jpg" alt="package banner" width={500} height={500} />
                    <div className='py-3 border-b'>
                        <h1 className='uppercase text-xl lg:text-2xl text-accent font-serif py-2'>Loch Ness / BDT 12,000</h1>
                        <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque sint alias reprehenderit nemo at!</p>
                    </div>
                    <div className='pt-2 flex justify-between items-center'>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center justify-center gap-1 text-sm text-gray-600'>
                                <BsStopwatch></BsStopwatch>
                                <p>10days</p>
                            </div>
                            <div className='flex items-center justify-center gap-1 text-sm text-gray-600'>
                                <BsPerson></BsPerson>
                                <p>16+</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                         <BsStarFill className="text-yellow-400"></BsStarFill>
                         <BsStarFill className="text-yellow-400"></BsStarFill>
                         <BsStarFill className="text-yellow-400"></BsStarFill>
                         <BsStarFill className="text-yellow-400"></BsStarFill>
                         <BsStarFill className="text-yellow-400"></BsStarFill>
                        </div>
                    </div>
                </div>
    );
};

export default PackageCard;