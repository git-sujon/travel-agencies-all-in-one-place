import RootLayout from '@/components/layout/RootLayout';
import Link from 'next/link';
import React, { useState } from 'react';


const SignUp = () => {
    const [error, setError] = useState('');
    const [agency, setAgency] = useState(false);
    // make sure the user as an agency or not 
    const checkAgency = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgency(!agency);
    }
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const address = form.address.value;
        const license = form.license.value;
        const employeeName = form.employeeName.value;
        const employeeNumber = form.employeeNumber.value;
        const designation = form.designation.value;
        const photo = form.photo.value;
        if (agency || (name === '' || email === '' || password === '')) {
            setError('Please give your name, email, password and photo');
        }
        else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}|:;<>,.?~])(?=.{8,})/.test(password)) {
            setError('Password must be at least 6 characters and must contain at least one uppercase letter, one lowercase letter, one number and one special character')
            return;
        }
        else if (agency && (address === '' || license === '' || employeeName === '' || employeeNumber === '' || designation === '')) {
            setError('Please give your address, license, employee name, employee number and designation');
        }
        if (!agency) {
            const user = {
                name,
                email,
                password,
                photo
            }
        }
        else {
            const agency = {
                name,
                email,
                password,
                photo,
                address,
                license,
                employee: {
                    name: employeeName,
                    phoneNumber: employeeNumber,
                    designation
                }
            }
        }
    }
    return (
        <div className='min-h-[100vh]'>
            <div className=' max-container flex justify-around items-center gap-10'>
                <div className=' bg-white border shadow-xl h-fit max-w-[400px] mt-20 md:mt-32 rounded-md p-4 md:px-8'>
                    <p className='text-red-500 text-center my-2 text-sm'>{error}</p>
                    <h1 className='font-bold text-2xl text-center primary-color'>Sign Up</h1>
                    <div className='mt-2 flex justify-center'>
                        <input type="checkbox" onChange={checkAgency} name="agency" className='mr-2' />
                        <label htmlFor="agency" className='text-sm font-medium text-accent'>Create account as an agency</label>
                    </div>
                    <div className='mb-3'>
                        <form onSubmit={handleSignIn}>
                            <input type="text" name='name' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder={agency ? 'Agency Name' : "Name"} />
                            <input type="email" name='email' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Email' />
                            {agency && <>
                                <input type="text" name='address' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Address' />
                                <input type="text" name='license' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='license code' />
                                <input type="text" name='employeeName' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Employee Name' />
                                <input type="text" name='employeeNumber' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Employee Number' />
                                <input type="text" name='designation' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Employee Designation' />
                            </>}
                            <input type="password" name='password' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Password' />
                            <input type="text" name='photo' className='w-full rounded outline-none h-8 px-2 text-black  mt-4 border-b' placeholder='Photo Url' />

                            <button className='text-lg font-semibold font-mono text-white bg-primary hover:bg-secondary duration-300 w-full py-1 rounded mt-5 btn-hover-effect'>Sign Up</button>
                        </form>
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