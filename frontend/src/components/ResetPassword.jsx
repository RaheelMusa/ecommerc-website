"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ResetPassword = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && router.query) {
      const { id, token } = router.query;

      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:7000/api/v1/resetpassword/${id}/${token}`);

          if (response.data.success) {
            console.log('Password reset success');
          } else {
            console.error('Password reset failed:', response.data.message);
          }
        } catch (error) {
          console.error('An error occurred while resetting the password:', error.message);
        }
      };

      if (id && token) {
        fetchData();
      } else {
        console.error('ID and token are required parameters');
      }
    }
  }, [router.query]);

  return (
    <div>
      <h1>Reset page.</h1>
    </div>
  );
};

export default ResetPassword;
