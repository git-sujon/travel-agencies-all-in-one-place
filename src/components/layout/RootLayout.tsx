import Navbar from "../UI/Shared/Navbar";
import Footer from "../UI/Shared/Footer";
import { Toaster } from "react-hot-toast";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="min-h-screen container">
        <div className="">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
