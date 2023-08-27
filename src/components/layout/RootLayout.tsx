import Footer from "../UI/Shared/Footer";
import { useAppDispatch } from '@/components/redux/hooks'
import { setLoading, setUser } from '@/components/redux/features/user/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/lib/Firebase'
import { useEffect } from 'react'

import { Toaster } from "react-hot-toast";
import Navbar from "../UI/Shared/Navar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {


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


  return (
    <>
      <Toaster />
      <Navbar />
      <div className="min-h-screen">
        <div className="">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
