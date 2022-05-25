import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail'
const Purchase = () => {
    
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const {_id,name, img, description, price, quantity, minimumQuantity} = service;
 const handleOrder = (event) => {
event.preventDefault();
const order = {
    userId: _id,
    productName: name,
    price: price,
    user: user.email,
    userName: user.displayName,
    address: event.target.address.value,
    phone: event.target.phone.value,
    orderQuantity: event.target.orderQuantity.value
}

fetch('http://localhost:5000/order', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(order)
})
    .then(res => res.json())
    .then(data => {
        if(data.success){
            toast(`You Are Order, ${name}`)
            event.target.reset()
        }
        else{
            toast.error(`Already have and Order on ${data.booking?.productName}`)
        }
       
    });


 }
    return (
        <div>
               <section id="card" className="text-gray-600 body-font mt-20">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
              <p className="text-3xl font-bold leading-7 text-center text-white">
                Add New Service !
              </p>
              <form onSubmit={handleOrder}>
                <div className="md:flex items-center mt-8">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Name
                    </label>
                    <input
                      disabled
                      type="text"
                      name="name"
                      value={user.displayName || ''}
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
                    <label className="font-semibold leading-none text-gray-300">
                      Email
                    </label>
                    <input
                     disabled
                      type="email"
                      name="email"
                      value={user.email || ''}
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>
                <div className="md:flex items-center mt-6">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Price
                    </label>
                    <input
                      disabled
                      type="text"
                      name="price"
                      value={price}
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
                    <label className="font-semibold leading-none text-gray-300">
                      Phone
                    </label>
                    <input
                      required
                      type="number"
                      name="phone"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>

                <div className="md:flex items-center mt-4">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Address
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>

                <div className="md:flex items-center mt-4">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Order Quantity
                    </label>
                    <input
                      required
                      type="number"
                      name="orderQuantity"
                    //   value="50"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-full">
                  <button className="mt-9 flex items-center  font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  focus:outline-none">
                    ORDER NOW
                    {/* <FcAddDatabase className="ml-2 text-lg" /> */}
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div className="flex flex-col md:w-1/2 md:pl-12">
            <div className="relative ">
              <a
                href="#"
                className="flex flex-col items-center bg-white z-50 relat rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={img}
                  alt=""
                />
                <div className="flex flex-col relative z-40 pb-10 justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${price}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Quantity {quantity}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   Minimum Order Quantity {minimumQuantity}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                  </p>
                  <button
                    // onClick={() => handleDelete(service._id)}
                    type="button"
                    className="flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Delivered
                    <svg
                      className="w-6 h-6 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </a>
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#F59E0B"
                  fillOpacity="1"
                  d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,218.7C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* <ToastContainer /> */}
          </div>
        </div>
      </section>
        </div>
    );
};

export default Purchase;