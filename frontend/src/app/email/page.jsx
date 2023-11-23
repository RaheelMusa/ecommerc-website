import SendResetEmail from "@/components/ResetEmail";
import React from "react";

const page = async () => {
  return (
    <div className="flex  flex-col h-screen justify-center ">
      <div className="bg-gray-50 w-1/2 mx-auto"></div>
      {/* <p>Check your email to reset your Password</p> */}
      <SendResetEmail />
    </div>
  );
};

export default page;
