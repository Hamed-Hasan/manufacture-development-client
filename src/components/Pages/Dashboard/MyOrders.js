import React, { useEffect, useState, lazy} from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
// import DeleteConfirmModal from "./DeleteConfirmModal"
import Loading from "../Shared/Loading" 
const DeleteConfirmModal = React.lazy(() => import('./DeleteConfirmModal'));  
const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  // const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(`https://manufacture-developement-server.onrender.com/order?user=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <ReactHelmet title="My Orders"></ReactHelmet>
      <h2 className="text-left bg-slate-500 rounded-lg py-2 px-4 w-36 text-white">
        My Order: {order.length}
      </h2>
          <React.Suspense fallback={<Loading/>}>
          <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>PRODUCT</th>
              <th>Price</th>
              <th>NAME</th>
              <th>REMOVE ORDER</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.productName}</td>
                <td>{a.price}</td>
                <td>{a.userName}</td>
                <td>
                  <label
                    disabled={a.paid === true}
                    onClick={() => setDeletingOrder(a)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteConfirmModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteConfirmModal>
      )}
          </React.Suspense>
    </div>
  );
};

export default MyOrders;
