import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import axiosPrivate from "../../Pages/api/axiosPrivate"
const MyOrders = () => {


    // const [user] = useAuthState(auth);
    // const [myItem, setMyItems] = useState([]);
  
    // const navigate = useNavigate();
    // useEffect(() => {
    //   const getOrders = async () => {
    //     const email = user?.email;
    //     const url = `http://localhost:5000/item?email=${email}`;
    //     try {
    //       const { data } = await axiosPrivate.get(url);
    //       setMyItems(data);
    //     } catch (error) {
    //       console.log(error.message);
    //       if (error.response.status === 401 || error.response.status === 403) {
    //         signOut(auth);
    //         navigate("/login");
    //       }
    //     }
    //   };
    //   getOrders();
    // }, [user]);
    
  
    const [order, setOrder] = useState([]);
    console.log(order)
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        
    fetch(`http://localhost:5000/order?user=${user.email}`, {
        // verify user 
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            console.log('res', res);
            if (res.status === 401 || res.status === 403) {
                // signOut(auth);
                localStorage.removeItem('accessToken');
                // navigate('/');
            }
            return res.json()
        })
        .then(data => {

            setOrder(data);
        });
    }, [user]);

    return (
        <div>
            <h2>My Order: {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    {
                            order?.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.productName}</td>
                                <td>{a.price}</td>
                                <td>{a.userName}</td>
                                <td>{a.address}</td>
                                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;