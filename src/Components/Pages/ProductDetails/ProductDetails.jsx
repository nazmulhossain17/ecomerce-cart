import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isLoading, error } = useSingleProductQuery(id);
    const dispatch = useDispatch();
  
    const handleAddProduct = (product) => {
      dispatch(addToCart(product));
      toast.success("Product Added!");
    };
  
    return (
      <div className="p-4 mx-auto max-w-7xl md:p-8 mt-12">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {product && (
          <div className="flex flex-col items-center border-b border-gray-300 md:flex-row md:space-x-8">
            <div className="w-full md:w-1/2">
              <img
                src={product?.imageUrl}
                alt={product?.name}
                className="w-full h-auto rounded-lg md:h-full md:w-full"
              />
            </div>
            <div className="w-full mt-4 space-y-3 md:w-1/2 md:mt-0">
              <h1 className="text-3xl font-semibold">{product?.name}</h1>
              <p className="text-xl">Price: ৳{product?.price}</p>
              <ul className="space-y-1 text-lg">
                {Array.isArray(product?.description) ? (
                  product?.description.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>{product?.description}</li>
                )}
              </ul>
              <p>Stock: {product?.quantity || "N/A"}</p>
              <button
                onClick={() => handleAddProduct(product)}
                className="px-6 py-2 mt-4 uppercase transition duration-200 ease-in border-2 border-purple-900 md:mt-6 rounded-2xl hover:bg-purple-800 hover:text-white focus:outline-none"
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProductDetails;