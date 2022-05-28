import React from "react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useUsers from "../../hooks/useUsers";
import auth from "../../../firebase.init";
import Loading from "../Shared/Loading";
import ReactHelmet from "../Shared/ReactHelmet/ReactHelmet";
const MakeAdmin = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useUsers();
  if (loading || !users.length) {
    return <Loading />;
  }

  const createAdmin = (email) => {
    const user = { isAdmin: true };
    fetch(`https://agile-castle-61471.herokuapp.com/newUser/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Admin Added!", { theme: "colored" });
        // e.target.reset();
      });
  };
  const removeAdmin = (email) => {
    if (email === user.email) {
      toast.error("Can't Remove Your Self!");
    } else if (email == process.env.REACT_APP_ceoEmail) {
      toast.error("Can't Remove CEO", { theme: "dark" });
    } else {
      const updateUser = { isAdmin: false };
      fetch(`https://agile-castle-61471.herokuapp.com/newUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updateUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          toast.info("Admin Removed!", { theme: "colored" });
          // e.target.reset();
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Manage A</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const {
                _id,
                displayName,
                photoURL,
                email,
                address,
                phone,
                isAdmin,
                city,
                facebook,
                github,
                linkedin,
                twitter,
              } = user;
              //   console.log(user);
              return (
                <tr key={_id}>
                  <ReactHelmet title="Make Admin"></ReactHelmet>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {displayName}
                          {email === process.env.REACT_APP_ceoEmail ? (
                            <div className="badge badge-secondary ml-3">
                              CEO
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="text-sm opacity-50">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {address}
                    <br />
                    <span className="badge badge-ghost badge-sm">{city}</span>
                  </td>
                  <td className="text-center">
                    {phone}
                    <br />
                    <div className="flex flex-row justify-evenly">
                      {facebook && (
                        <a href={facebook} target="_blank">
                          <FaFacebook className=" text-blue-700" />
                        </a>
                      )}
                      {github && (
                        <a href={github} target="_blank">
                          <FaGithub />
                        </a>
                      )}
                      {linkedin && (
                        <a href={linkedin} target="_blank">
                          <FaLinkedin className=" text-blue-600" />
                        </a>
                      )}
                      {twitter && (
                        <a href={facebook} target="_blank">
                          <FaTwitter className=" text-blue-500" />
                        </a>
                      )}
                    </div>
                  </td>
                  <th className="">
                    <div className="flex justify-center items-center">
                      {isAdmin === true ? (
                        <button
                          className="btn btn-secondary btn-xs"
                          onClick={() => removeAdmin(email)}
                        >
                          Remove Admin
                        </button>
                      ) : (
                        <button
                          className="btn btn-success btn-xs"
                          onClick={() => createAdmin(email)}
                        >
                          Make Admin
                        </button>
                      )}
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
