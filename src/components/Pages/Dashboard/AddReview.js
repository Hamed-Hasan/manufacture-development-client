import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "./../Shared/Loading";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, errors } = useForm();

  //for rating
  //rating start
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  // rating end

  if (loading) {
    return <Loading />;
  }
  const imageStorageKey = "0a489a5f81e1a77f2b17492e627939c3";
  const onSubmit = (data) => {
    const email = user.email;
    const photoURL = user.photoURL;
    const displayName = user.displayName;
    const review = { ...data, rating, email, photoURL, displayName };
    console.log(review);

    // add review to database
    fetch("https://manufacture-developement-server.onrender.com/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result === "data received!") {
          toast.success("Review Added!", { theme: "colored" });
        }
        console.log(data);
      });
  };
  return (
    <div className="w-full p-10  lg:w-1/2 mx-auto">
      <ReactHelmet title="Add Review"></ReactHelmet>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
        <div className="avatar mx-auto flex-col items-center gap-3">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} alt={user?.displayName} />
          </div>
          <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        </div>

        <div className="flex flex-row justify-center">
          {stars?.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || rating) > index ? colors.orange : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>

        <textarea
          {...register("review", { required: false, maxLength: 500 })}
          className="textarea textarea-primary h-40 my-3 w-full"
          placeholder="Your Review"
        ></textarea>
        <input className="btn btn-primary" type="submit" value="Add Review" />
      </form>
    </div>
  );
};
export default AddReview;
