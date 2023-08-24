import React from 'react';

const ContactCard = ({icon, title, value}: any) => {
    return (
        <div className=" p-5 flex flex-col items-center">
            <div className="border p-5 lg:p-7 border-dashed rounded-full w-fit flex justify-center items-center text-primary hover:text-secondary border-primary hover:border-secondary duration-300 transition-all">
                {icon}
            </div>
            <h1 className="mt-3 lg:mt-4 text-base md:text-lg lg:text-xl font-semibold text-primary">{title}</h1>
            <p className="text-sm font-medium text-accent lg:mt-2">{value}</p>
        </div>
    );
};

export default ContactCard;