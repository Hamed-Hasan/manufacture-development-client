import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0hFUH4hSrnXTFHAcZamvIpK6jvddZlBkCnTBaKPhikEV9PqfWiTBikVQG5tA5PflJT43luffrVPAOitae0Cj5j00FuuwU3qb');

const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    
    return (
        <div>
            <div className='flex items-center justify-center gap-7'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-left text-success font-bold">Hello, {order.userName}</p>
                    <h2 class="card-title text-left">Please Pay for <span className="text-green-600">{order.productName}</span></h2>
                    <p className='text-left '>Your Order Address: <span className='text-orange-700'>{order.address}</span> </p>
                    <p>Your Order Quantity: <span className='text-orange-700 text-left'> OrderQuantity  {order.orderQuantity}</span> </p>
                    <p className='text-left'>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={order} />
                    </Elements>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;