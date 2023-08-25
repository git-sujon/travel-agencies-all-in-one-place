import Footer from "../UI/Shared/Footer";


import { Toaster } from "react-hot-toast";
import Navbar from "../UI/Shared/Navar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
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
