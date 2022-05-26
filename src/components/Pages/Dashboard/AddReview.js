import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [loading, setLoading] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '0a489a5f81e1a77f2b17492e627939c3';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json()) 
    .then(result => {
      if(result.success){
          const img = result.data.url;
          const doctor = {
              name: data.name,
              email: data.email,
              message: data.message,
              img: img
          }
          // send to database 
          fetch('http://localhost:5000/addReview', {   
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(inserted => {
              if(inserted.insertedId){
                  toast.success('Review added successfully')
                  reset();
              }
              else{
                  toast.error('Failed to add the review');
              }
          })
      }
    })
   
    }
    return (
        <div >
            <h2 className='text-4xl'>Add Review</h2>
            <div className='flex items-center justify-center'>

<form onSubmit={handleSubmit(onSubmit)} className='mt-0 py-7 px-20 bg-slate-600 rounded-lg'>
<div className='w-full'>
    
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Name</span>
</label>
<input
type="text"
placeholder="Your Name"
className="input input-bordered w-full max-w-xs"
{...register("name", {
required: {
    value: true,
    message: 'Name is Required'
}
})}
/>
<label className="label">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
</label>
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Email</span>
</label>
<input
type="email"
placeholder="Your Email"
className="input input-bordered w-full max-w-xs"
{...register("email", {
required: {
    value: true,
    message: 'Email is Required'
},
pattern: {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: 'Provide a valid Email'
}
})}
/>
<label className="label">
{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
</label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Message</span>
</label>

<textarea
type="text"

className="input input-bordered w-full max-w-xs"
{...register("message", {
required: {
    value: true,
    message: 'message is Required'
}
})}
/>
</div>
<div className="form-control w-full max-w-xs">
<label htmlFor="image" class={loading ? "btn btn-primary loading mt-4" : "btn btn-primary mt-5"}>
            Upload Image
              </label>
<input
type="file"
id='image'
className="-mt-10 -z-50 relative"
{...register("image", {
required: {
    value: true,
    message: 'Image is Required'
}
})}
/>
<label className="label">
{errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
</label>
<input className='btn mt-3 bg-emerald-500 w-full max-w-xs text-white' type="submit" value="Add Review" />
</div>

</div>
</form>
            </div>
    
        </div>
    );
};

export default AddReview;