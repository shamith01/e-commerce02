"use client";
import React from "react";
import { useSignupMutation } from "./redux/api/authApi";
import { useState } from "react";
import Cookies from "js-cookie";

const page = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const [signup, { data, isError, isSuccess }] = useSignupMutation();
  // console.log("mutation data", data);
  if (isError) {
    console.log("something went wrong");
  }
  if (isSuccess) {
    console.log("data", data);
    Cookies.set("token", data.token);
  }
  const handleclick = async () => {
    const data = {
      name,
      email,
      password,
      address,
      phone,
    };

    await signup(data);
  };

  return (
    <div className="flex justify-center ">
      <img
        src={"img1.jpg"}
        alt="pic"
        className="bg-cover brightness-75  opacity-100 z-[-1] fixed"
      />

      <div className="mt-5 p-[2rem] w-min backdrop-blur-xl grid rounded-md  absolute left-[7rem] top-[5rem] ">
        <h2 className="text-2xl font-bold m-2 text-white  font-roboto tracking-wider ">
          Register
        </h2>
        <div className="w-[400px] px-2 m-1  ">
          <input
            type="text"
            name="name"
            placeholder="Enter Name "
            className="w-full bg-inherit border-black text-md border-2 p-2  brightness-150 "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="w-[400px] px-2 m-1 ">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full bg-inherit border-black text-md border-2 p-2 brightness-150"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-[400px] px-2 m-1  ">
          <input
            type="password"
            name="password"
            placeholder="Enter password "
            className="w-full bg-inherit text-md border-black border-2 p-2 brightness-150"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="w-[400px] px-2 m-1  ">
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone number "
            className="w-full text-md bg-inherit border-black border-2 p-2 brightness-150"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="w-[400px] px-2 m-1  ">
          <textarea
            name="address"
            rows={4}
            className="w-full text-md bg-inherit border-black border-2 p-2 brightness-150"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Enter Address"
          ></textarea>
        </div>

        <button
          onClick={handleclick}
          className="p-2 mx-1 mt-1 mb-3 hover:border-[3px] hover:border-green-300  text-xl w-full font-semibold bg-green-600  text-white rounded-md "
        >
          Submit
        </button>
      </div>

      <div className="w-[300px] h-[300px] rounded-full right-[7rem] top-[4rem]  bg-transparent  backdrop-contrast-200 border-2 absolute "></div>

      <div className="w-[200px] h-[200px] rounded-full right-[15rem] top-[20rem] bg-transparent  backdrop-contrast-200  border-2 absolute "></div>

      <div className="w-[100px] h-[100px] rounded-full right-[15rem] top-[30rem] bg-transparent  backdrop-contrast-200 border-2 absolute "></div>

      {/* 
      <div className="right-[7rem] w-[40%] top-[5rem] font-roboto font-semibold absolute text-white text-[4rem] text-right  ">
        <p>
          Good moring user.
          this is your desired website
        </p>
      </div> */}
    </div>
  );
};

export default page;
