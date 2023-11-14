import { useState } from "react";

const Category = ({ onCategoryChanged }) => {
  const [category, setCategory] = useState("");
  const [checked, setchecked] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChanged = (e) => {
    const value = e.target.value;
    const updatedCategories = selectedCategories.includes(value)
      ? selectedCategories.filter((category) => category !== value)
      : [...selectedCategories, value];

    setSelectedCategories(updatedCategories);
    onCategoryChanged(updatedCategories);
  };
  // const handleCategoryChanged = (e) => {

  //   const categoryValue = e.target.value;
  //   if (categoryValue) {
  //     onCategoryChanged(categoryValue);
  //   }
  // };

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
