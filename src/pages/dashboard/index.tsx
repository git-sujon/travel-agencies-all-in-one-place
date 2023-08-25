import DashboardLayout from "@/components/layout/DashboardLayout";
import { Box, Modal, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [guideNum, setGuideNum] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleGuides = () => {
    setGuideNum(guideNum + 1);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <div className="">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                SL
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Image
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Location
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Duration
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Package type
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Number of people
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            <tr className="odd:bg-white even:bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">1</th>
              <th className="px-6 py-4 font-medium text-gray-900">
                <div className="relative h-10 w-10">
                  <Image
                    width={40}
                    height={40}
                    className=" rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Helen Howard
              </th>
              <td className="px-6 py-4">Nov.4 2022</td>
              <td className="px-6 py-4">helen@sailboatui.com</td>
              <td className="px-6 py-4">helen@sailboatui.com</td>
              <td className="px-6 py-4">helen@sailboatui.com</td>
              <td className="px-6 py-4">helen@sailboatui.com</td>

              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3 w-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Paid
                </span>
              </td>
              <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-red-500 bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-red-700 hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fill="currentColor"
                      d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0Zm-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2h7.5Zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0v-10Zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Delete
                </button>
                <button
                  onClick={handleOpen}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-green-700 hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300"
                >
                  <FaRegEdit />
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center">
            Edit Package
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="mx-auto max-w-xl">
              <form action="" className="space-y-5">
                <div className="mx-auto max-w-xs">
                  <label
                    htmlFor="example5"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Upload package image
                  </label>
                  <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                    <div className="space-y-1 text-center">
                      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-6 w-6 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                          />
                        </svg>
                      </div>
                      <div className="text-gray-600">
                        <a
                          href="#"
                          className="font-medium text-primary-500 hover:text-primary-700"
                        >
                          Click to upload
                        </a>{" "}
                        or drag and drop
                      </div>
                      <p className="text-sm text-gray-500">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                    </div>
                    <input id="example5" type="file" className="sr-only" />
                  </label>
                </div>

                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-6">
                    <label
                      htmlFor="example7"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="example7"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="package name"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="example8"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="example8"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="location"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="example7"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Duration
                    </label>
                    <input
                      type="text"
                      id="example7"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="package duration"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="example8"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Number of people
                    </label>
                    <input
                      type="number"
                      id="example8"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="number of persons"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="example11"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Package type
                    </label>
                    <select
                      id="example11"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    >
                      <option value="" disabled>
                        Choose
                      </option>
                      <option value="">Basic</option>
                      <option value="">Premium</option>
                      <option value="">Ultimate</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="example8"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="example8"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="price"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="example9"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="example9"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="description of the package"
                    />
                  </div>
                  <div className="col-span-10">
                    <label
                      htmlFor="example8"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Guide Name
                    </label>
                    <input
                      type="text"
                      id="example8"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="guide"
                    />
                  </div>
                  <div className="col-span-2">
                    <button
                      onClick={handleGuides}
                      type="button"
                      className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-xl font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                    >
                      +
                    </button>
                  </div>
                  {guideNum > 1 && (
                    <>
                      <div className="col-span-12">
                        <label
                          htmlFor="example8"
                          className="mb-1 block text-sm font-medium text-gray-700"
                        >
                          Second Guide Name
                        </label>
                        <input
                          type="text"
                          id="example8"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="guide"
                        />
                      </div>
                    </>
                  )}
                  <div className="col-span-3">
                    <label
                      htmlFor="example11"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Transport options
                    </label>
                    <select
                      id="example11"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                    >
                      <option value="" disabled>
                        Choose
                      </option>
                      <option value="">Bus</option>
                      <option value="">Train</option>
                      <option value="">Flight</option>
                    </select>
                  </div>

                  <div className="col-span-12 flex items-center space-x-2">
                    <input
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      id="example13"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
                    />
                    <label
                      htmlFor="example13"
                      className="text-sm font-medium text-gray-700"
                    >
                      Agree with the{" "}
                      <a href="#" className="text-blue-700">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  <div className="col-span-4">
                    {isChecked ? (
                      <button
                        type="button"
                        className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        disabled
                        type="button"
                        className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-gray-400 shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                  <div className="col-span-4">
                    <button
                      type="button"
                      className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 bg-orange-400"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactNode) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
