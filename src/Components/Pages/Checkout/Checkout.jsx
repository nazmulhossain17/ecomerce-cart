import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";


const Checkout = () => {
    const [scheduled, setScheduled] = useState(false);
    const currentUser = useSelector((state) => state.user.currentUser);
  
    const { products } = useSelector((state) => state.cart);
    const subtotal = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  
    // Define the delivery cost
    const deliveryCost = 4.5;
  
    // Calculate the total cost
    const total = subtotal + deliveryCost;
    const handleSubmit = () => {
        // Assuming form validation is done
        toast.success('Order placed successfully!');
      };
    return (
      <div className="flex flex-col items-center gap-5 p-4 sm:flex-row">
        <div className="w-full sm:w-1/2 md:max-w-3xl">
          <h1 className="mb-2">Delivery Information</h1>
          <div className="h-[60vh] border border-gray-300 rounded-md p-10 overflow-auto">
            <div className="flex gap-5">
              <div className="w-full space-y-5">
                <div className="">
                  <label htmlFor="name">
                    Name: <b>{currentUser?.user.name}</b>
                  </label>
                  &nbsp;
                  <input type="text" id="name" className="mt-2" />
                </div>
                <div>
                  <label htmlFor="name">
                    Email: <b>{currentUser?.user.email}</b>
                  </label>
                  <input type="text" id="name" className="mt-2" />
                </div>
              </div>
              <div className="w-full space-y-5">
                <div>
                  <label htmlFor="name">Phone</label>
                  <input type="text" id="name" className="mt-2" />
                </div>
                <div>
                  <label htmlFor="name">City</label>
                  <input type="text" id="name" className="mt-2" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="name">
                Address: <b>{currentUser?.user.address}</b>
              </label>
              <textarea id="name" className="mt-2" />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <label className="text-lg">Scheduled Delivery</label>
              <switch onClick={() => setScheduled(!scheduled)} />
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-full">
                <label htmlFor="note">Note</label>
                <input
                  disabled={!scheduled}
                  type="text"
                  id="note"
                  className="mt-3"
                />
              </div>
              <div className="w-full flex flex-col mt-2">
                <label className="mb-3" htmlFor="name">
                  Date
                </label>
                {/* <DatePickerWithPresets disabled={!scheduled} /> */}
              </div>
            </div>
            <div className="mt-3">
              <label className="text-lg">Payment method</label>
              <div className="flex gap-5 mt-5">
                <div className="flex">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="r1"
                      name="paymentMethod"
                      value="online"
                      className="border border-gray-400"
                    />
                    <label htmlFor="r1">Online payment</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="r2"
                      name="paymentMethod"
                      value="cash"
                      className="border border-gray-400"
                    />
                    <label htmlFor="r2">Cash on delivery</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:max-w-lg">
          <h1 className="mb-2 text-center sm:text-left">Order Summery</h1>
          <div className="border border-gray-300 rounded-md h-[60vh] p-10 flex flex-col">
            <div className="flex-grow  mb-2 space-y-2 overflow-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center bg-gray-100 p-1 rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      className="h-[82px] rounded-md mr-2"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg mb-2">{product.name}</h1>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl mr-5">{product.quantity}</h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <p>Subtotal</p>
                <p>{subtotal.toFixed(2)}$</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Delivery</p>
                <p>{deliveryCost.toFixed(2)}$</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>{total.toFixed(2)}$</p>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-lime-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-lime-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Checkout;