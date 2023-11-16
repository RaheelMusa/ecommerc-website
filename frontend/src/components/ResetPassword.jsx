"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast, useToast } from "react-toastify";
import { useRouter } from "next/navigation";

const resetPassword = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const changeValue = async (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email.email,
      };
      const result = await axios.post(
        "http://localhost:7000/api/v1/emailResetPassword",
        data
      );
      toast.success("Reset email sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("failed to send ");
    }
  };
  return (
    <div>
      <div className="md:w-1/2 w-full mx-auto my-10 px-3">
        <h2 className="text-2xl ">Reset your Password:</h2>
        <form onSubmit={submitData} className="my-10 mx-auto w-full">
          <div className="my-3  gap-5 block w-full justify-center">
            <div className="my-5">
              <label
                htmlFor="email"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Enter your email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                onChange={changeValue}
                value={email.email}
                className="w-full   outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <button className="bg-green-500 px-4 py-3 rounded-md font-medium text-white text-center block mx-auto hover:bg-green-300 hover:duration-500 hover:text-blue-500 ease-in-out delay-75">
              Send
            </button>
          </div>
        </form>
        <p className="text-xl font-medium">
          Back to
          <Link className="text-blue-500" href="/login">
            {" "}
            login{" "}
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default resetPassword;
