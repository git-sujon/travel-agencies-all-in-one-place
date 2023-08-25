import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            this is dashboard
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };
  