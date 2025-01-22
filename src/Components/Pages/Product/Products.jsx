import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import { Link } from "react-router";


const Products = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
      dispatch(addToCart(product));
      toast.success("Product Added!");
    };
  
    return (
      <>
        <div>
          <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 mb-3">
            <Link to={`/product-details/${product.id}`} className="w-full">
              <img src={product?.imageUrl} alt="product" />
              <h1 className="text-xl font-semibold">{product?.name}</h1>
            </Link>
            <p>Rating: {product?.rating}</p>
            <p>seller: {product?.sellerName}</p>
            <p className="text-sm">
              Availability: {product?.status ? "In stock" : "Out of stock"}
            </p>
            <p className="text-sm">Price: ৳{product?.price}</p>
            <button
              onClick={() => handleAddProduct(product)}
              className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </>
    );
  };
  
  Products.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      sellerName: PropTypes.string,
      status: PropTypes.bool,
      price: PropTypes.number,
    }).isRequired,
  };
  
  export default Products;