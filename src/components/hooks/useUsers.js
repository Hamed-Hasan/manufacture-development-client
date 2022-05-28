import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://agile-castle-61471.herokuapp.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return [users, setUsers];
};

export default useUsers;
