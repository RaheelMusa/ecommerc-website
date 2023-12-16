"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {

  const router = useRouter()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });
  const changeValue = async (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        age: user.age,
        phone: user.phone,
      };
      const result = await axios.post(
        `http://localhost:7000/api/v1/register`,
        data
      );
      toast.success("You have registered successfully");
      router.push('/login')
    } catch (error) {
      toast.error("Registration failed");
    }
  };
  return (
    <div>
      <div className="md:w-3/6 w-full mx-auto my-10 px-3">
        <h2>Fill the form below to register your account:</h2>
        <form onSubmit={submitData} className="my-10 mx-auto w-full">
          <div className="my-3 md:grid md:grid-cols-2 gap-5 block w-full justify-center">
            <div>
              <label
                htmlFor="firstName"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                first Name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                onChange={changeValue}
                value={user.firstName}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                onChange={changeValue}
                value={user.lastName}
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
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
                area-hidden
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
                area-hidden
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Age:
              </label>
              <input
                type="age"
                name="age"
                id="password"
                placeholder="Choose your password"
                onChange={changeValue}
                value={user.age}
                area-hidden
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="w-full text-base block md:text-lg text-gray-500 font-medium"
              >
                Phone:
              </label>
              <input
                type="phone"
                name="phone"
                id="password"
                placeholder="Choose your password"
                onChange={changeValue}
                value={user.phone}
                area-hidden
                className="w-full block md:w-fit outline-none rounded bg-gray-300 py-2 px-4 text-gray-500"
              />
            </div>
          </div>
          <div className="text-blue-500 cursor-pointer font-medium hover:text-blue-300 hover:duration-300 hover:ease-in-out w-fit">
            <Link href="#">Forget your password?</Link>
          </div>
          <button className="bg-green-500 px-4 py-3 rounded-md font-medium text-white text-center block mx-auto hover:bg-green-300 hover:duration-500 hover:text-blue-500 ease-in-out delay-75">
            Register
          </button>
          <p>
            Already have account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-semibold hover:text-blue-900"
            >
              login here..
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
