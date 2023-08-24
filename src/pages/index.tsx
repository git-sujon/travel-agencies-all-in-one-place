import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Travel Agency</title>
        <meta
          property="og:title"
          content="Welcome to a world of exploration and adventure! Our travel agency opens doors to breathtaking destinations, crafting unforgettable experiences for every traveler. Whether you seek tranquil beach getaways, cultural escapades, or thrilling expeditions, we curate journeys that resonate with your wanderlust. Discover the joy of hassle-free travel planning, expert guidance, and immersive itineraries. Your next extraordinary adventure starts here."
          key="title"
        />
      </Head>

      <div className="flex justify-center items-center text-5xl font-bold min-h-screen">
        This is home page
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
