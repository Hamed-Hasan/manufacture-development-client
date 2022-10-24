
import { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  if (user) {
    const email = user.email;
    fetch(`https://agile-castle-61471.herokuapp.com/userInfo/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.isAdmin === true) {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
        setAdminLoading(false);
      });
  }
  return [admin, adminLoading];
};
export default useAdmin;
