import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const TestPage = () => {
    return (
        <div>
            this is a test page and it will removed
        </div>
    );
};

export default TestPage;

TestPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
  };
  