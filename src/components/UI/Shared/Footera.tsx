import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-accent text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* site info  */}
        <div className="col-span-2 ">
          <p className="text-2xl font-bold italic mb-3">Travel Agency</p>
          <p className="text-justify">
            Welcome to a world of exploration and adventure! Our travel agency
            opens doors to breathtaking destinations, crafting unforgettable
            experiences for every traveler. Whether you seek tranquil beach
            getaways, cultural escapades, or thrilling expeditions, we curate
            journeys that resonate with your wanderlust.
          </p>
        </div>

        {/* links  */}
        <div>
          <p className="text-xl font-bold ">Packages</p>
          <div className="flex flex-col font-semibold ">
            <Link href="" className="hover:text-secondary text-sm">
              Limited
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              Basic
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              Gold
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              Premium
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold ">Company</p>
          <div className="flex flex-col font-semibold ">
            <Link href="" className="hover:text-secondary text-sm">
              About us
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              Contact us
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              Career
            </Link>
            <Link href="" className="hover:text-secondary text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
