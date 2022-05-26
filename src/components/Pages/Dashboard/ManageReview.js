import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManagesReviews from './ManagesReviews';

const ManageReview = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto px-4 my-9'>
            <h2 className="text-4xl my-20">See All Reviews</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
                                reviews?.map((review, index) => <ManagesReviews
                                key={review._key}
                                review={review}
                                index={index}
                                refetch={refetch}
                        
                            ></ManagesReviews>)
                        }
      </div>
        </div>
    );
};

export default ManageReview;