// ... Your imports and other code ...

import DashboardLayout from "@/components/layout/DashboardLayout";
import { ordersData } from "@/components/static/orderData";

const AllPackages = () => {
    return (
      <div>
        <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Booking ID
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Customer Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Package ID
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Package Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Amount
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Status
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              Actions
            </th>
          </tr>
        </thead>
          <tbody className="block md:table-row-group">
            {ordersData.map((order) => (
              <tr
                key={order.id}
                className={`${
                  order.id % 2 === 0 ? "bg-white" : "bg-gray-300"
                } border border-grey-500 md:border-none block md:table-row`}
              >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Order ID */}
                  {order.id}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Customer Name */}
                  {order.customerName}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Package ID */}
                  {order.packageId}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Package Name */}
                  {order.packageName}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Amount */}
                  {order.amount}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Order Status */}
                  <span
                    className={`${
                      order.status === "completed"
                        ? "bg-green-500"
                        : order.status === "processing"
                        ? "bg-blue-500"
                        : order.status === "canceled"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    } text-white py-1 px-2 rounded`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  {/* Actions */}
           
                  <button
                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded ${
                      order.status === "completed" || order.status === "canceled"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    // onClick={() => handleDeleteOrder(order.id)}
                    disabled={order.status === "completed" || order.status === "canceled"}
                  >
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
  