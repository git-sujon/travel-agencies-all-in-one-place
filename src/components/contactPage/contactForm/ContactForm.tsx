import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="grid md:grid-cols-2 py-7 md:py-12 gap-5 items-center">
                    <div className="space-y-5 md:p-5">
                        <p className="uppercase text-base  font-bold text-slate-600">Get in touch</p>
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-accent">Feel Free to Contact with us</h1>
                        <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae amet excepturi quos ea nemo reiciendis, blanditiis dolorum, velit repellat ducimus. Saepe voluptates eveniet sed rem accusantium. Nesciunt, sapiente ex.</p>
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#3b5998] relative flex justify-center items-center group duration-500">
                                <a href="">
                                    <FaFacebookF className="w-4 h-4 text-white"></FaFacebookF>
                                </a>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#1da1f2] relative flex justify-center items-center group  duration-500">
                                <a href="">
                                    <FaTwitter className="w-4 h-4 text-white"></FaTwitter>
                                </a>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#0077b5] relative flex justify-center items-center groupduration-500">
                                <a href="">
                                    <FaLinkedinIn className="w-4 h-4 text-white"></FaLinkedinIn>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="md:p-5">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-accent">Send a Message</h1>
                        <form className="mt-4">
                            <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium">Name *</label>
                                    <input type="text" name="name" className="w-full border border-gray-300 rounded-full px-4 h-10 outline-none text-sm" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                                    <input type="text" name="email" className="w-full border border-gray-300 rounded-full px-4 h-10 outline-none text-sm" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="message" className="text-sm font-medium">Message *</label>
                                <textarea name="message" className="w-full border border-gray-300 rounded-xl px-4 pt-3 h-10 outline-none text-sm min-h-[150px]" placeholder="Type here..." />
                            </div>
                            <button className='bg-primary px-4 py-2 lg:px-5 lg:py-3 mt-2 hover:bg-secondary duration-300 text-xs font-semibold uppercase tracking-widest text-white rounded-full'>Send Message</button>
                        </form>
                    </div>
                </div>
    );
};

export default ContactForm;