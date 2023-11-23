"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const changeValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: user.email,
        password: user.password,
      };
      const result = await axios.post(
        `http://localhost:7000/api/v1/login`,
        data
      );
      localStorage.setItem("user", JSON.stringify(result.data.user));
      localStorage.setItem("token", JSON.stringify(result.data.token));
      toast.success("You logged in successfully");
      router.refresh();
      router.push("/");
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
                htmlFor="email"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={changeValue}
                value={user.email}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Choose your password"
                onChange={changeValue}
                value={user.password}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
          </div>
          <div className="text-blue-500 cursor-pointer font-medium hover:text-blue-300 hover:duration-300 hover:ease-in-out w-fit">
            <Link href="/email">Forget your password?</Link>
          </div>
          <button className="bg-green-500 px-4 py-3 rounded-md font-medium text-white text-center block mx-auto hover:bg-green-300 hover:duration-500 hover:text-blue-500 ease-in-out delay-75">
            Login
          </button>
          <p>
            Don't have account?{" "}
            <Link
              href="/register"
              className="text-blue-600 font-semibold hover:text-blue-900"
            >
              Sign up here..
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
