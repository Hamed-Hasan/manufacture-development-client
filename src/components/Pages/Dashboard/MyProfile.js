import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyProfile = () => {
  const [user] = useAuthState(auth);

    return (
        <div>
     <div class="flex items-center justify-center gap-5 px-5">
  <div class="w-3/5">
      <img src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470' alt="" />
  </div>
  <div class="w-2/5">
<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={user?.photoURL} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Update Now</button>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;