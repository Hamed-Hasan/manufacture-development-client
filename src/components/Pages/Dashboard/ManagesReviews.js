import React from "react";
import {FaStar} from 'react-icons/fa'
const ManagesReviews = ({onePersonReview}) => {
  const {displayName, email, photoURL, rating, review, _id} = onePersonReview;
  return (
    <div>
      <div className="card card-compact w-64 h-[400px] bg-base-100 shadow-xl flex py-10 items-center mx-16 md:mx-28 lg:mx-0">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} alt={displayName} />
          </div>
        </div>
        <h2 className="card-title text-center my-5">{displayName}</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className=" text-center px-5 pt-3 h-[120px] overflow-hidden">
            {review}
          </p>
          <div className="flex">
          { 
            rating>=1 ? <FaStar className="text-orange-400"/> : <FaStar  className="text-orange-100"/>
          }
          { 
            rating>=2 ? <FaStar className="text-orange-400"/> : <FaStar  className="text-orange-100"/>
          }
          { 
            rating>=3 ? <FaStar className="text-orange-400"/> : <FaStar  className="text-orange-100"/>
          }
          { 
            rating>=4 ? <FaStar className="text-orange-400"/> : <FaStar  className="text-orange-100"/>
          }
          { 
            rating>=5 ? <FaStar className="text-orange-400"/> : <FaStar  className="text-orange-100"/>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagesReviews;
