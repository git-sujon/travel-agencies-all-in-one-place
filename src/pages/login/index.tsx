import RootLayout from '@/components/layout/RootLayout';
import Link from 'next/link';
import React, { useState } from 'react';

const LoginPage = () => {
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
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
                    <h1 className='font-bold text-2xl text-center primary-color'>Sign In</h1>
                    <div className='my-3'>
                        <form onSubmit={handleLogin}>
                            <input type="email" name='email' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Your Email' />
                            <input type="password" name='password' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Your Password' />
                            <button className='text-lg font-semibold font-mono text-white bg-primary hover:bg-secondary duration-300 w-full py-1 rounded mt-5 btn-hover-effect'>Sign in</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]' />
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]' />
                        </div>
                    </div>
                    <p className='text-sm text-center text-slate-600 mb-2'>Don&apos;t have an account? Please <Link href="/signup" className='text-red-500 underline'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};