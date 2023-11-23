import Link from "next/link";
import React from "react";

const SuccessfullMsg = async () => {
  return (
    <div className="flex  flex-col h-screen justify-center ">
      <div className="bg-gray-50 w-1/2 mx-auto">
        <p className="text-2xl font-normal  px-2 py-1">
          Email reset sent. Please check your email to reset your password
        </p>

        <p className="text-xl text-center">
          Back to:
          <Link
            href="/login"
            className="text-red-500 font-semibold text-base px-3 hover:text-red-600 "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SuccessfullMsg;
