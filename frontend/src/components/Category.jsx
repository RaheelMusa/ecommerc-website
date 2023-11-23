import { useState } from "react";

const Category = ({ onCategoryChanged, selectedCategory }) => {
  // const handleCategoryChanged = (e) => {
  //   const categoryValue = e.target.value;
  //   if (e.target.checked) {
  //     setCategory((prevCatergories) => [...prevCatergories, categoryValue]);
  //   } else {
  //     setCategory((prevCatergories) =>
  //       prevCatergories.filter((category) => category !== categoryValue)
  //     );
  //   }
  //   onCategoryChanged(category);
  // };

  const handleCategoryChanged = (e) => {
    const selectedCategory = e.target.value;
    const isChecked = e.target.checked;

    onCategoryChanged(selectedCategory, isChecked);
  };
  return (
    <>
      <div className="bg-gray-100  px-5 py-2 h-screen rounded leading-10">
        <h3>Category: </h3>
        <form>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="Shoes"
              id="Shoes"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("Shoes")}
            />
            <label htmlFor="Shoes" className="hover:text-gray-600">
              Shoes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="kid play"
              id="kid play"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("kid play")}
            />
            <label htmlFor="kid play" className="hover:text-gray-600">
              Kid Play
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="baby clothes"
              id="babyClothes"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("baby clothes")}
            />
            <label htmlFor="babyClothes" className="hover:text-gray-600">
              Baby Clothes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="electronics"
              id="electronics"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("electronics")}
            />
            <label htmlFor="electronics" className="hover:text-gray-600">
              Electronics
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="Men shoes"
              id="menShoes"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("electornics")}
            />
            <label htmlFor="menShoes">Men shoes</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="Women shoes"
              id="womenShoes"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("women shoes")}
            />
            <label htmlFor="womenShoes" className="hover:text-gray-600">
              Women shoes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="bottle"
              id="bottles"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("bottle")}
            />
            <label htmlFor="bottles" className="hover:text-gray-600">
              Bottles
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              value="Clothes"
              id="womenDress"
              onChange={handleCategoryChanged}
              checked={selectedCategory.includes("Clothes")}
            />
            <label htmlFor="womenDress" className="hover:text-gray-600">
              Women dress
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;
