import React, { useEffect } from 'react';
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'
import login from '../../assets/icons/login-draw.svg'
import './Login'

import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    // const [token] = useToken(user || gUser || fUser);
    // useEffect( () =>{
    //     if (token) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])


    if (loading || gLoading || fLoading) {
        return <Loading></Loading>
    }

    if(error || gError || fError) {
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }









    return (
        <div class="relative min-h-screen flex ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative">

            
          <img src={login} alt="" />
          </div>
          <div class="md:flex md:items-center md:justify-center w-full mx-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div class="max-w-lg w-full space-y-8">
              <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                  Welcom Back!
                </h2>
                <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
              </div>
              <div class="flex flex-row justify-center items-center gap-10">
              <div className='w-11 h-11 items-center justify-center inline-flex rounded-2xl  hover:shadow-lg cursor-pointer transition ease-in duration-300'
              onClick={() => signInWithGoogle()}
              >
                  <img className='w-10 h-10' src={google} alt="" />
              </div>
              <div className='w-11 h-11 items-center justify-center inline-flex rounded-2xl hover:shadow-lg cursor-pointer transition ease-in duration-300'
                            onClick={() => signInWithFacebook()}

              >
                  <img className='w-10 h-10' src={facebook} alt="" />
              </div>
            
              </div>
              <div class="flex items-center justify-center space-x-2">
                <span class="h-px w-16 bg-gray-200"></span>
                <span class="text-gray-300 font-normal">or continue with</span>
                <span class="h-px w-16 bg-gray-200"></span>
              </div>
              {/* <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true"/>
                <div class="relative">
                  <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input
                    class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="" placeholder="mail@gmail.com" value="mail@gmail.com"/>
                </div>
                <div class="mt-8 content-center">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="" placeholder="Enter your password" value="*****|"/>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox"
                      class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div class="text-sm">
                    <a href="#" class="text-indigo-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button type="submit"
                    class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <Link to="/signup"
                    class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                    up</Link>
                </p>
              </form> */}


<form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-2 md:ml-16'>

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
        <span className="label-text">Password</span>
    </label>
    <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full "
        {...register("password", {
            required: {
                value: true,
                message: 'Password is Required'
            },
            minLength: {
                value: 6,
                message: 'Must be 6 characters or longer'
            }
        })}
    />
    <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label>
</div>

{signInError}
{/* <input className='btn w-full max-w-xs text-white' type="submit" value="Login" /> */}
<button type="submit"
                    class="w-full max-w-xs flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
</form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;