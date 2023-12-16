"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from 'react-icons/ci'
import Category from "./Category";
import RatingFilter from "./Rating";
import PricePage from "./Price";
import { useParams, useRouter } from "next/navigation";

const ProductList = () => {
  const params = useParams()
  const id = params.id
     const router = useRouter()
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState("");
  const [pageSize, setPageSize] = useState(8);
  const [totalPages, setTotalpages] = useState(1);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const handleCategoryChanged = (category, isChecked) => {
    setSelectedCategory((prevCategories) =>
      isChecked
        ? [...prevCategories, category]
        : prevCategories.filter((c) => c !== category)
    );

    // setCategory(selectedCategory);
  };
  // const handleMinPriceChange = (newMinPrice) => {
  //   setMinPrice(newMinPrice);
  // };
  // const handleMaxPriceChange = (newMaxPrice) => {
  //   setMaxPrice(newMaxPrice);
  // };

  // const handleRatingChange = (selectRating) => {
  //   setRating(selectRating);
  // };
  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const params = {
        page,
        pageSize,
        category: selectedCategory.join(" , "),
        from: minPrice,
        to: maxPrice,
      };

      if (rating) {
        params.rating = rating;
      }
      const data = await axios.get(`http://localhost:7000/api/v1/products`, {
        params,
      });
      const { user, totalPages } = data.data;
      console.log(data.data.user);
      setProduct(user);
      setTotalpages(totalPages);
    } catch (error) {
      console.log("Error fetching Product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProduct = async (_id) => {
    try {
      await axios.delete(`http://localhost:7000/api/v1/product/${_id}`);
      const dltProduct = product.filter(
        (productList) => productList._id !== _id
      );
      setProduct(dltProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRatingFilterApply = (selectedRating) => {
    setRating(selectedRating);
  };
  const handlePriceFilterApply = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  const handleResetFilter = () => {
    setRating("");
  };
  useEffect(() => {
    fetchProduct();
  }, [pageSize, rating, page, selectedCategory, minPrice, maxPrice]);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between px-5">
        <p>Total products: {product.length}</p>

        <p className="ml-6">Page: {page}</p>
        <Link
          href="/products/create"
          className="px-3 py-2 bg-blue-400 rounded my-5 ml-10 text-white hover:duration-500 hover:bg-blue-600 "
        >
          Add new product
        </Link>
      </div>

      <div className="bg-gray-100">
        <div className="float-left">
          <div>
            <h2 className="text-center font-semibold mb-5">Filters</h2>

            <PricePage
              onPriceFilterApply={handlePriceFilterApply}
              onResetFilter={handleResetFilter}
            />
            {/* Filter search button */}
          </div>
          <div className="flex items-center justify-center my-3">
            <RatingFilter
              onRatingFilterApply={handleRatingFilterApply}
              onResetFilter={handleResetFilter}
            />
          </div>
          <Category
            onCategoryChanged={handleCategoryChanged}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
          {isLoading ? (
            <p className="absolute top-[60%] left-[50%] text-8xl font-bold">
              Loading product...
            </p>
          ) : (
            product.map((productList) => {
              return (
                <div

                  key={productList._id}
                  className="border p-5 flex flex-col gap-3"
                >
                  <Link href={`/products/${productList._id}`}>
                  {true ? (
                    <img
                      src={productList.image}
                      className="w-auto hover:scale-105 hover:duration-500 md:h-[300px] h-full object-cover object-center block "
                    ></img>
                  ) : (
                    <img
                      alt="ecommerce"
                      class="object-fill w-full h-full block"
                      src="https://dummyimage.com/424x264"
                    ></img>
                  )}
                  </Link>
                  <p className="text-sm text-gray-400">
                    {productList.category}
                  </p>
                  <h2 className="text-base md:text-2xl font-semibold hover:text-red-400 cursor-pointer w-fit">
                    {productList.title}
                  </h2>
                  <p className="text-base md:text-lg">
                    {productList.desc.substring(0, 50)}.......
                  </p>

                  <p className="text-base font-semibold md:text-xl">
                    price: {productList.price}$
                  </p>
                  <div className="flex flex-wrap justify-between">
                    <p>Rating: {productList.rating}</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => removeProduct(productList._id)}
                        className="w-fit hover:text-red-500 cursor-pointer"
                        >
                        <FaTrash size={20} />
                      </button>
                      <button
                           onClick={() => router.push(`/editproduct/${productList._id}`)}
                        className="w-fit hover:text-red-500 cursor-pointer"
                      >
                        <CiEdit size={20} />
                      </button>
                    </div>
                  </div>
                  <button className="bg-green-500 rounded text-white font-medium hover:bg-green-600 py-3">
                    Add to cart{" "}
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="flex items-center justify-center my-3">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="bg-gray-200 mr-2 px-3 py-2 rounded hover:bg-blue-300 active:bg-blue-500 focus:bg-blue-300"
          >
            Previous ({!page ? "" : page - 1})
          </button>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-blue-300 active:bg-blue-500 focus:bg-blue-300"
          >
            Next ({page})
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
