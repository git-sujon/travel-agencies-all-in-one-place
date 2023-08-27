import { GiHamburgerMenu} from "react-icons/gi";
import {GrChapterAdd } from "react-icons/gr";
import {SiYourtraveldottv } from "react-icons/si";
import {FaClipboardList, FaUsers } from "react-icons/fa";
import {

  BiSolidDashboard,
  BiLogOutCircle,
} from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch } from '@/components/redux/hooks'
import { setLoading, setUser } from '@/components/redux/features/user/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/lib/Firebase'
import { useEffect } from 'react'

interface RootLayoutProps {
    children: React.ReactNode;
  }


const DashboardLayout = ({ children }: RootLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (auth && user) {
        dispatch(setUser(user));

        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  const handleLogout = async() => {
   
  };

  return (

    <>  <Toaster />
        <div className="bg-[#FEFCF3] antialiased">
         
         <div className="h-full w-screen flex flex-row ">
           {/* Hamburger Menu Button */}
           <button
             onClick={() => setSidebarOpen(!sidebarOpen)}
             className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-900 focus:bg-blue-500 focus:outline-none focus: fixed top-0 left-0 z-10 sm:hidden"
           >
             <GiHamburgerMenu />
           </button>
   
           {/* Sidebar */}
           <div
             id="sidebar"
             className={`    min-h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${
               sidebarOpen ? "translate-x-0 " : "-translate-x-full"
             } md:translate-x-0 `}
           >
             <div className="space-y-6 md:space-y-10 mt-4">
               <h1 className="font-bold text-sm md:text-lg text-center flex items-center gap-1">
                 <BiSolidDashboard />
                 Dashboard
               </h1>
   
            
   
               <div id="menu" className="flex flex-col space-y-2">
                 <Link
                   href="/dashboard/packages"
                   className="  font-medium border-b hover:border-b-0 py-2 px-2 hover:bg-primary hover: hover:text-white rounded-md transition duration-150 ease-in-out flex items-center gap-1"
                 >
                   <SiYourtraveldottv />
                   <span className="text-sm lg:text-lg">Packages</span>
                 </Link>
                 <Link
                   href="/dashboard/add-packages"
                   className="  font-medium border-b hover:border-b-0 py-2 px-2 hover:bg-primary hover: hover:text-white rounded-md transition duration-150 ease-in-out flex items-center gap-1"
                 >
                   <GrChapterAdd />
                   <span className="text-sm lg:text-lg">Add Packages</span>
                 </Link>
                 <Link
                   href="/dashboard/orders"
                   className="  font-medium border-b hover:border-b-0 py-2 px-2 hover:bg-primary hover: hover:text-white rounded-md transition duration-150 ease-in-out flex items-center gap-1"
                 >
                   <FaClipboardList />
                   <span className="text-sm lg:text-lg">Orders</span>
                 </Link>
                 <Link
                   href="/dashboard/users"
                   className="  font-medium border-b hover:border-b-0 py-2 px-2 hover:bg-primary hover: hover:text-white rounded-md transition duration-150 ease-in-out flex items-center gap-1"
                 >
                   <FaUsers />
                   <span className="text-sm lg:text-lg">All Users</span>
                 </Link>
                 <button
                   onClick={() => handleLogout()}
                   className="  font-medium border-b hover:border-b-0 py-2 px-2 hover:bg-primary hover: hover:text-white rounded-md transition duration-150 ease-in-out flex items-center gap-1"
                 >
                   <BiLogOutCircle />
                   <span className="text-sm lg:text-lg"> Sign Out</span>
                 </button>
               
               </div>
             </div>
           </div>
   
           {/* Main Content */}
           <div
             className={`flex-grow p-4 ${
               sidebarOpen ? "ml-30 md:ml-60 lg:ml-60" : "w-full"
             }`}
           >
             {/* ... Main content */}
            {children}
           </div>
         </div>
       </div>
    </>

  );
};

export default DashboardLayout;

