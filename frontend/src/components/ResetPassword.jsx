"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const changeValue = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
        const {token, user_id}= router.query
       
      const data = {
        password: password.password,
        confirmPassword: password.confirmPassword,
      };
      const result = await axios.post(
        `http://127.0.0.1:7000/api/v1/resetpassword/${user._id}/${token}`,
        data
      );
      toast.success("Your password has been changed successfully");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    const {token, user_id} = router.query
    if(!token || !user_id){
        router.push('/error')
    }
  }, [router.query])
  return (
    <div>
      <div className="md:w-3/6 w-full mx-auto my-10 px-3">
        <h2> Choose your password:</h2>
        <form onSubmit={submitData} className="my-10 mx-auto w-full">
          <div className="my-3 gap-10 block w-full justify-center">
            
            <div className="my-6">
              <label
                htmlFor="newPassword"
                className="w-full text-base block md:text-lg text-gray-500 font-medium mb-1"
              >
                New password:
              </label>
              <input
                type="password"
                name="password"
                id="newPassword"
                placeholder="Choose your password"
                onChange={changeValue}
                value={password.password}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="conPassword"
                className="w-full text-base block md:text-lg text-gray-500 font-medium mb-1"
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
         {loading === true ? "loading..." : <button className="bg-green-500 px-4 py-3 rounded-md font-medium text-white text-center block mx-auto hover:bg-green-300 hover:duration-500 hover:text-blue-500 ease-in-out delay-75">
            Reset password
          </button>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
