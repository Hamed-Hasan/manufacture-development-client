import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../hooks/useServiceDetail";
import "./Purchase.css";
import { FcAddDatabase } from "react-icons/fc";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import modal from "../../assets/icons/success-modal.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const Purchase = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const { _id, name, img, description, price, quantity, minimumQuantity } =
    service;

  const [myOrderQuantity, setMyOrderQuantity] = useState(0);
  let totalPrice =
    myOrderQuantity * price === 0
      ? minimumQuantity * price
      : myOrderQuantity * price;
  const handleOrder = async (event) => {
    event.preventDefault();

    await setMyOrderQuantity(minimumQuantity);
    await setMyOrderQuantity(
      Number.parseInt(event.target.myOrderQuantity.value)
    );

    const order = {
      userId: _id,
      productName: name,
      price: price,
      user: user.email,
      userName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
      orderQuantity: event.target.myOrderQuantity.value,
    };

    fetch("https://agile-castle-61471.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // toast(`You Are Order, ${name}`)
          event.target.reset();
          handleOpen();
        }
      });
  };

  const handleChange = (e) => {};

  return (
    <div>
      <section id="card" className="text-gray-600 body-font mt-20">
        <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
              <p className="text-3xl font-bold leading-7 text-center text-white">
                Order Your Best Product !
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
                      value={user.displayName || ""}
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
                      value={user.email || ""}
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
                      name="myOrderQuantity"
                      min={minimumQuantity}
                      max={quantity}
                      defaultValue={minimumQuantity}
                      onChange={(e) => {
                        setMyOrderQuantity(e.target.value);
                      }}
                      //   value="50"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>
                <p className="font-bold mt-3">Total Price: $ {totalPrice}</p>
                <div className="flex items-center justify-center w-full">
                  <button className="mt-9 flex items-center  font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  focus:outline-none">
                    ORDER NOW
                    <FcAddDatabase className="ml-2 text-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex  flex-col md:w-1/2 md:pl-12">
            <div className="relative ">
              <a
                href="#"
                className="flex flex-col items-center bg-white z-50 relat rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className=" object-cover w-full h-96 rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={img}
                  alt=""
                />
                <div className="flex py-10 flex-col relative z-40 pb-10 justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-left text-xl font-bold tracking-tight text-emerald-500 dark:text-white">
                    {name}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  text-left dark:text-white">
                    Price $
                    <small className="text-left text-emerald-500">
                      {price}
                    </small>
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-left  dark:text-white">
                    Quantity{" "}
                    <small className="text-emerald-500">{quantity}</small>
                  </h5>
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 text-left dark:text-white">
                    Minimum Order Quantity{" "}
                    <small className="text-emerald-500">
                      {minimumQuantity}
                    </small>
                  </h5>
                  <p className="mb-6 font-normal text-left text-gray-700 dark:text-gray-400 text-sm">
                    <small className="text-emerald-500"> {description}</small>
                  </p>
                </div>
              </a>
              <svg
                className="absolute left-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#10B981"
                  fillOpacity="1"
                  d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,261.3C672,235,768,181,864,165.3C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <ToastContainer />
          </div>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="text-center flex justify-center">
                  <img src={modal} className="h-24 " alt="" />
                </div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <p className="text-center">You Are Order {name}</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {/* Check your service go to Home page & Manage service page &
              Customize your service 😀 */}
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
