"use client";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const ResetPassword = () => {


  const params = useParams();
  const router = useRouter();
  

  const { id, token } = params
  const [userPassword, setUserPassword] = useState({
    password: "",
    confirmPassword: ""
  })
  const changeValue = (e)=>{
    const {name, value} = e.target
    setUserPassword({...userPassword, [name]: value})
  }
  const submitData= async(e) =>{
    e.preventDefault()
    try {
      const data= {
        password: userPassword.password,
        confirmPassword: userPassword.confirmPassword
      }
        axios.post(`http://localhost:7000/api/v1/resetpassword/${id}/${token}`, data)
       toast.success("password reset successfully")
    } catch (error) {
      console.log(error)
      toast.error("failed to reset your password")
    }
  }
 

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="col-span-3 mb-5  ml-5 md:col-span-1 w-full md:w-auto">
          <Link href="/" className=" w-auto  ">
            <Image
              src="/logo.png"
              alt="Logo Image"
              width={80}
              height={50}
              // className="h-100 w-100"
            ></Image>
          </Link>
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Reset Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5"  onSubmit={submitData}>
           
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
                value={userPassword.password}
                onChange={changeValue}
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={userPassword.confirmPassword}
                onChange={changeValue}
              />
              
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  aria-describedby="newsletter"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="newsletter"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-300 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
