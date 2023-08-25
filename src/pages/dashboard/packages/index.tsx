import DashboardLayout from "@/components/layout/DashboardLayout";
import { packagesData } from "@/components/static/pakagesData";
import React from "react";



const AllPackages = () => {
  return (
    <div>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Name
            </th>
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Duration
            </th>
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Price
            </th>
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Status
            </th>
            <th className="bg-gray-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {packagesData.map((pkg) => (
            <tr key={pkg.id} className="bg-gray-200 border border-grey-500 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {pkg.name}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {pkg.duration}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {pkg.price}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                {pkg.status}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell text-sm">
                <button className="bg-primary hover:bg-blue-900 text-white font-bold py-1 px-2 border border-blue-500 rounded mr-2">
                Payment
                </button>
                <button className="bg-amber-300 hover:bg-amber-800 hover:text-white font-bold py-1 px-2 border border-amber-500 rounded mr-2">
                 Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded mr-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPackages;

AllPackages.getLayout = function getLayout(page: React.ReactNode) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
