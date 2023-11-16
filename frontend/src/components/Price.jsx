import React, { useEffect, useState } from 'react'

const PricePage = ({ onPriceFilterApply, onResetFilter }) => {
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleMinPriceChange = (newMinPrice) =>{
        setMinPrice(newMinPrice)
    }
    const handleMaxPriceChange = (newMaxPrice) =>{
        setMaxPrice(newMaxPrice)
    }
    const handleFilterApply = () => {
      try {
        setIsLoading(true)
        if(minPrice === '' && maxPrice === ''){
          onResetFilter()
      }
  else{

      onPriceFilterApply(minPrice, maxPrice)
      
  }
        
      } catch (error) {
        
      console.error('Error:', error);
      } finally{
        setIsLoading(false)
      }
       
                
       
    }
    
  return (
    <div>
       <h2>Price Range: </h2>
          <div className="flex">
            <input
              type="number"
              className="my-3 outline-none bg-gray-300 px-1 py-2 mx-3 rounded-md w-20 text-center"
              id="minPrice"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => handleMinPriceChange(e.target.value)}
            />
            <input
              type="number"
              className="my-3 outline-none bg-gray-300 px-1 py-2 mx-3 rounded-md w-20 text-center "
              id="maxPrice"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => handleMaxPriceChange(e.target.value)}
            />
            </div>

            {/* Filter search button */}

          {isLoading === true ? ( "Loading...." ) : ( <button onClick={handleFilterApply} className='w-full bg-blue-400 p-2 rounded-md hover:bg-blue-600 text-white hover:duration-300 hover:ease-in-out delay-100'>Search</button> ) }

         
    </div>
  )
}

export default PricePage
