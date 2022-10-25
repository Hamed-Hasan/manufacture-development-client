import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://manufacture-developement-server.onrender.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return [reviews, setReviews];
};

export default useReviews;
