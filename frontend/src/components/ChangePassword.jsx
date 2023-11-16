"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setPassword({ ...user, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        oldPassword: password.oldPassword,
        newPassword: password.newPassword,
        confirmPassword: password.confirmPassword,
      };
      const result = await axios.patch(
        `http://localhost:7000/api/v1/ChangePassword`,
        data
      );
      toast.success("Your password has been changed successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="md:w-3/6 w-full mx-auto my-10 px-3">
        <h2> Login your account:</h2>
        <form onSubmit={submitData} className="my-10 mx-auto w-full">
          <div className="my-3 md:grid md:grid-cols-2 gap-5 block w-full justify-center">
            <div>
              <label
                htmlFor="cpassword"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Current Password:
              </label>
              <input
                type="password"
                name="oldpassword"
                id="cpassword"
                placeholder="Enter your current password"
                onChange={changeValue}
                value={password.oldPassword}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="newPassword"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                New password:
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Choose your password"
                onChange={changeValue}
                value={password.newPassword}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="comPassword"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Confirm password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="conPassword"
                placeholder="Re-enter your password"
                onChange={changeValue}
                value={password.confirmPassword}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
          </div>
          <div className="text-blue-500 cursor-pointer font-medium hover:text-blue-300 hover:duration-300 hover:ease-in-out w-fit">
            <Link href="/resetPassword">Forget your password?</Link>
          </div>
          <button className="bg-green-500 px-4 py-3 rounded-md font-medium text-white text-center block mx-auto hover:bg-green-300 hover:duration-500 hover:text-blue-500 ease-in-out delay-75">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
