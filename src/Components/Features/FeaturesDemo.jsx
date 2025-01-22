import React from 'react';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const FeaturesDemo = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addToCart(product));
        toast.success("Product Added"); // Ensure toast takes a string
    };

    return (
        <>
            <div>
                <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-9 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
                    <Link to={`/product-details/${product.id}`} className="w-full">
                        <img src={product?.imageUrl} alt="product" />
                        <h1 className="text-xl font-semibold">{product?.name}</h1>
                    </Link>
                    <p>Quantity: {product?.quantity || "N/A"}</p>
                    <p className="text-sm">
                        Availability: {product?.quantity ? "In stock" : "Out of stock"}
                    </p>
                    <p className="text-2xl">Price: ${product?.price}</p>
                    <button
                        onClick={handleAddProduct}
                        className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

FeaturesDemo.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        rating: PropTypes.number,
        sellerName: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default FeaturesDemo;
