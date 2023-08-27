import RootLayout from "@/components/layout/RootLayout";

const Blog = () => {
    return (
        <div className="flex justify-center items-center text-4xl font-bold italic min-h-screen">
            Coming Soon
        </div>
    );
};

export default Blog;

Blog.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
  };