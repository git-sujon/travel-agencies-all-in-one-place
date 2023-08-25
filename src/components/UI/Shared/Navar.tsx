import { ImMenu } from "react-icons/im";
import { useState } from "react";
import logo from "../../../Assets/logo/logo_white.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // console.log(user)
  const user = {
    photoURL: "/avator.jpg",
  };
  const [open, setOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(true);
  const [userEmail, setUserEmail] = useState("example@gmail.com");

  const signOutHandler = () => {
    setUserEmail("");
  };

  return (
    <nav className="p-5 bg-accent text-white shadow md:flex md:items-center md:justify-between items-center">
      <div className="flex justify-between items-center ">
        <Link href="/" className="text-2xl  cursor-pointer font-bold">
          Travel Agency
        </Link>

        <div className="flex">
          {userEmail && (
            <>
              {/* profile  */}
              <div className="relative md:hidden">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="inline-flex  text-gray-600 "
                >
                  <Image
                    className="w-12  rounded-full  border-2 hover:border-gray-900 border-white"
                    src={user?.photoURL}
                    width={80}
                    height={80}
                    alt=""
                  />
                </button>

                {/* Dropdown menus */}
                <div className={` ${profileOpen ? "hidden" : ""} `}>
                  <div
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="absolute right-0 z-10 mt-4 w-40 origin-top-right rounded-md border border-gray-100 bg-accent shadow-lg"
                    role="menu"
                  >
                 <div className="p-2">
                  <Link
                    href="/profile"
                    className="block rounded-lg px-4 py-2 text-sm  "
                    role="menuitem"
                  >
                    View profile
                  </Link>

                  <Link
                    href="/dashboard"
                    className="block rounded-lg px-4 py-2 text-sm  "
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                </div>
                  </div>
                </div>

                {/* Dropdown Menus End  */}
              </div>
            </>
          )}
          {/* responsive Menu Icon  */}
          <div className="text-3xl cursor-pointer mx-3 md:hidden block">
            <ImMenu
              onClick={() => setOpen(!open)}
              className="w-10 text-white"
              name="menu"
            ></ImMenu>
          </div>
        </div>
      </div>

      <ul
        className={` ${
          open && "absolute opacity-0 top-[-400px]"
        }  md:flex md:items-center z-[-1] md:z-auto md:static  w-full mx-auto left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
        onClick={() => setOpen(!open)}
      >
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/"
            className="text-md font-bold hover:text-secondary duration-500"
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/packages"
            className="text-md font-bold hover:text-secondary duration-500"
          >
            Packages
          </Link>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/blog"
            className="text-md font-bold hover:text-secondary duration-500"
          >
            Blog
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/contact"
            className="text-md font-bold hover:text-secondary duration-500"
          >
            Contact Us
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            href="/about"
            className="text-md font-bold hover:text-secondary duration-500"
          >
            About Us
          </Link>
        </li>

        {userEmail ? (
          <div className="flex  items-center">
            <div>
              <button
                onClick={signOutHandler}
                className="group relative inline-block overflow-hidden border border-secondary px-8 py-3 focus:outline-none focus:ring "
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-orange-500"></span>

                <span className="relative text-sm font-medium text-orange-100 transition-colors group-hover:text-white">
                  LogOut
                </span>
              </button>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <button className="group relative inline-block overflow-hidden border border-secondary px-8 py-3 focus:outline-none focus:ring ">
              <span className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full group-active:bg-orange-500"></span>

              <span className="relative text-sm font-medium text-orange-100 transition-colors group-hover:text-white">
                Login
              </span>
            </button>
          </Link>
        )}
      </ul>

      {userEmail && (
        <>
          {/* profile  */}
          <div className=" relative hidden md:block">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="inline-flex  text-gray-600 "
            >
              <Image
                className="w-12  rounded-full  border-2 hover:border-gray-900 border-white"
                src={user?.photoURL}
                width={80}
                height={80}
                alt=""
              />
            </button>

            {/* Dropdown menus */}
            <div className={` ${profileOpen ? "hidden" : ""} `}>
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="absolute block right-0 z-10 mt-4 w-40 origin-top-right rounded-md border border-gray-100 bg-accent shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <Link
                    href="/profile"
                    className="block rounded-lg px-4 py-2 text-sm  "
                    role="menuitem"
                  >
                    View profile
                  </Link>

                  <Link
                    href="/dashboard"
                    className="block rounded-lg px-4 py-2 text-sm  "
                    role="menuitem"
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown Menus End  */}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
