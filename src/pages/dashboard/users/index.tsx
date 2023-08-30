import UsersTable from "@/components/UsersTable/UsersTable";
import DashboardLayout from "@/components/layout/DashboardLayout";
import React, { useState } from "react";

const UsersPage = () => {


  return <UsersTable />;
};

export default UsersPage;

UsersPage.getLayout = function getLayout(page: React.ReactNode) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
