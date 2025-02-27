import {  useState } from "react";
import { useGetProductsQuery } from "../../../redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../../../redux/features/product/productSlice";
import Products from "./Products";
const Product = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);
    const dispatch = useDispatch();
    const { priceRange, status } = useSelector((state) => state.product);
  
    // Step 1: Add state for search query
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSlider = (e) => {
      dispatch(setPriceRange(Number(e.target.value)));
    };
  
    return (
      <>
        <div className="relative grid grid-cols-1 p-4 mx-auto mt-7 md:grid-cols-12 max-w-7xl">
          <div className="bg-slate-100 md:bg-white md:col-span-3 z-0 mr-19 mt-4 space-y-5 border border-gray-200/80 p-7 self-start sticky top-16 h-[calc(40vh-80px)]">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  required
                />
              </div>
            </form>
  
            <div className="space-y-3">
              <h1 className="text-2xl uppercase">Price Range</h1>
              <div className="max-w-xl">
                <input
                  type="range"
                  defaultValue={350}
                  max={1000}
                  min={0}
                  step={1}
                  onChange={handleSlider}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
              </div>
              <div>From 0৳ To {priceRange}৳</div>
            </div>
          </div>
  
          <div className="grid grid-cols-1 col-span-9 gap-5 p-5 md:grid-cols-2 lg:grid-cols-4">
            {!isLoading ? (
              data
                .filter((product) =>
                  (searchQuery
                    ? product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    : true) &&
                  product.price
                )
                .map((product) => <Products product={product} key={product.id} />)
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default Product;