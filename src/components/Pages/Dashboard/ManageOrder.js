import React, { useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useService from "../../hooks/useService";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";

// import React, { useState } from 'react';

// import ReactHelmet from "../../../ReactHelmet/ReactHelmet";

const ManageService = () => {
  const [services, setServices] = useService();

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this service"
    );
    if (proceed) {
      const url = `https://agile-castle-61471.herokuapp.com/manage/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          toast("Deleted User");
        });
    }
  };

  return (
    <>
      <ReactHelmet title="Manage Order"></ReactHelmet>
      <div className="mt-10 bg-gray-700">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 py-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase rounded-none bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete User
                </th>
                <th scope="col" className="px-6 py-3">
                  Images
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Minimum Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr
                  key={service._id}
                  className="bg-white border-b bg-gray-800  hover:bg-gray-50 "
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-400 dark:text-white whitespace-nowrap"
                  >
                    {service?.name}
                  </th>
                  <td className="px-6 py-4">{service?.quantity}</td>

                  <td className="px-6 py-4">
                    <button
                      className="bg-amber-600 flex items-center justify-center text-white px-4 py-2 rounded-md shadow-lg"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={service?.img}
                      style={{ borderRadius: "50%" }}
                      className=" w-10 h-10"
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4"> ${service?.price}</td>
                  <td className="px-6 py-4">{service?.minimumQuantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageService;
