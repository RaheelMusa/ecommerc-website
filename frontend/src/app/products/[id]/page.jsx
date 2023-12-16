"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";

const SingleProduct = () => {
    
  const [image, setImage] = useState(null);



  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:7000/api/v1/product/${id}`, product);
      toast.success("product updated succesffuly");
      router.push("/products");
    } catch (error) {
      console.log(error);
      toast.error("failed to update the product");
    }

    setProduct({
      title: "",
      desc: "",
      price: "",
      rating: "",
      category: "",
    });
  };
  const changeValue = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const changeImage = (e) => {
    const file = e.target.files[0];
    setImage(file );
  };
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: 0,
    rating: "",
    category: "",
    image: ""
  });
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const res = await axios.get(
        `http://localhost:7000/api/v1/singleproduct/${id}`
      );
      console.log(res.data.data);
      setProduct(res.data.data);
    };
   
    fetchSingleProduct();
  }, []);

  return (
    

<div class=" bg-white border border-gray-200 rounded-lg shadow flex gap-5 dark:bg-gray-800 dark:border-gray-700">
   
        <img class="rounded-t-lg" src={product.image} alt="" width="500px" />
   
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.desc}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {product.price}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {product.rating}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.review}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            add to cart
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    
    
    
  );
};

export default SingleProduct;
