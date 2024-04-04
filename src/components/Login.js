import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

 const [isSignIn,setisSignIn]= useState(true)
const togglesignForm=()=>{
  setisSignIn(!isSignIn);
}

  return <div><Header/>
  <div className="absolute">
    <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="logo"/>
  </div>
  <form className="w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignIn?'Sign In ':'Sign Up'}</h1>
  {!isSignIn &&  <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-800"/>}
    <input type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-800"/>
    <input type="text" placeholder="password" className="p-4 my-4 w-full bg-gray-800"/>
    <button className="p-4 my-6 bg-red-700 w-full">{isSignIn?'Sign In ':'Sign Up'}</button>
    <p className="px-4 cursor-pointer" onClick={togglesignForm}>{isSignIn?'New to NetFlix ? Sign Up Now':'Already registered ? Sign In Now'}</p>
  </form>
  </div>;
};

export default Login;
