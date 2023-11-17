'use client'
import SendResetEmail from "@/components/ResetEmail";
import axios from "axios";
import React, { useState } from "react";

const page = async() => {
  const [password, setPassword] = useState("")
  
try {
  const data = await axios.post(`http://localhost:7000/api/v1/changePassword/${id}/${token}`, {password})
} catch (error) {
  
}
  return (
    <div className="flex  flex-col h-screen justify-center ">
      <div className="bg-gray-50 w-1/2 mx-auto">

      <SendResetEmail />
      </div>
      {/* <p>Check your email to reset your Password</p> */}
    </div>
  );
};

export default page;
