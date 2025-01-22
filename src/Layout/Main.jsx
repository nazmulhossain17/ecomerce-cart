import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="mb-20 p-9">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
  };
  
  export default Main;