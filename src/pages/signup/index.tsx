import RootLayout from '@/components/layout/RootLayout';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
    const [error, setError] = useState('')
    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        console.log(email, password);
        if (email === '' || password === '') {
            setError('Please give your email and password');
        }
    }
    return (
        <div className='min-h-[100vh]'>
            <div className=' max-container flex justify-around items-center gap-10'>
                <div className=' bg-white border shadow-xl h-fit max-w-[400px] mt-36 md:mt-44 rounded-md p-4 md:px-8'>
                    <p className='text-red-500 text-center my-2 text-sm'>{error}</p>
                    <h1 className='font-bold text-2xl text-center primary-color'>Sign Up</h1>
                    <div className='my-3'>
                        <form onSubmit={handleSignIn}>
                            <input type="text" name='name' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Name' />
                            <input type="email" name='email' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Email' />
                            <input type="password" name='password' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Password' />
                            <input type="file" className="file-input mt-4 bg-transparent file-input-bordered file-input-sm w-full " />
                            <button className='text-lg font-semibold font-mono text-white bg-primary hover:bg-secondary duration-300 w-full py-1 rounded mt-5 btn-hover-effect'>Sign Up</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]' />
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]' />
                        </div>
                    </div>
                    <p className='text-sm text-center text-slate-600 mb-2'>You have already an account? Please <Link href="/login" className='text-red-500 underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};