import React, { useState } from "react";

const AddPackagePage = () => {
  const [guideNum, setGuideNum] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const handleGuides = () => {
    setGuideNum(guideNum + 1);
  };

  const handleCheckboxChange = () => {

    setIsChecked(!isChecked);
  };

  return (
    <div>
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
            <div className="col-span-2">
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
            <div className="col-span-2">
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
    </div>
  );
};

export default AddPackagePage;
