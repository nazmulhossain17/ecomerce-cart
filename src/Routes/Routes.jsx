import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Cart from "../Components/Pages/Cart/Cart";
import Checkout from "../Components/Pages/Checkout/Checkout";
import ProductDetails from "../Components/Pages/ProductDetails/ProductDetails";
import Product from "../Components/Pages/Product/Product";
import Notfoundpage from "../Components/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />,
              },
              {
                path: "/product",
                element: <Product></Product>,
              },
            {
                path: "*",
                element: <Notfoundpage/>
            }
        ]
    }
])

export default router;