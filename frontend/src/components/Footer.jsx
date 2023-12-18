import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="md:w-[80vw] min-h-48 my-10 text-center flex-col items-center flex mx-auto">
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 md:justify-between md:gap-20 text-center  lg:grid-cols-4">
          <div className="my-3 md:flex flex-col items-center justify-center">
          <div className="col-span-3  ml-5 md:col-span-1 w-full md:w-auto mb-3">
            <Link href="/" className=" w-auto mb-5  ">
              <Image
                src="/logo.png"
                alt="Logo Image"
                width={80}
                height={50}
                // className="h-100 w-100"
              ></Image>
            </Link>
          </div>
            <p className="w-1/2 md:w-full mx-auto">
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf
              sed do eiusmod tem.
            </p>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="text-center md:text-start">
            <h2 className="font-bold text-2xl md:my-5 my-2">Quick Links</h2>
            <ul>
              <li className="md:my-5  my-2 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                About
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Offer & Discounts
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Get Coupon
              </li>
              <li className="my-5 md:text-xl text-base cursor-pointer hover:text-red-500 hover:translate-x-3 hover:duration-200 ">
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>Copyright ©2023 All rights reserved </p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
