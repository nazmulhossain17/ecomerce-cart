import { useState } from 'react';

import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../redux/features/cart/cartSlice';
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../../redux/user/userSlice';
import { LuChevronsDown } from 'react-icons/lu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector(selectCart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dispatch = useDispatch();
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(
        // `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        "https://ecomerce-cart-api.vercel.app/api/users/logout",
        {
          method: "GET",
          credentials: "include", // Include credentials (cookies) in the request
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      // Clear the access token on the client side (assuming you're using cookies)
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <a href="/" className={styles.siteLogo} aria-label="AW">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64.06 32"
            className="h-8 w-auto"
            fill="currentColor"
          >
            <rect x="12.31" width="6.78" height="32" />
            <polygon points="0 32 6.78 32 12.31 0 5.53 0 0 32" />
            <rect x="25.88" width="6.78" height="32" />
            <polygon points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32" />
            <rect x="44.97" width="6.78" height="32" />
            <polygon points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0" />
          </svg>
        </a>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
      <ul className="hidden space-x-12 md:flex font-thin">
            <Link
              to="/"
              className="block text-3xl text-gray-900 hover:text-green-700"
            >
              Home
            </Link>

            <Link
              to="/product"
              className="block text-3xl text-gray-900 hover:text-blue-700"
            >
              product
            </Link>
            <Link
              to="/about"
              className="block text-3xl text-gray-900 hover:text-blue-700"
            >
              about
            </Link>
            <Link
              to="/contact"
              className="block text-3xl text-gray-900 hover:text-blue-700"
            >
              contact
            </Link>
          </ul>
      </nav>

      <button
        className={styles.menuBtn}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <span className={styles.menuIcon}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </span>
      </button>
      <div className={styles.btnGroup}>
          {currentUser ? (
            
          <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-dark"
                  id="dropdownButton"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {currentUser?.user.name}
                  <hr />
                  <span className="mt-3">
                    <LuChevronsDown className="text-pink-900" />
                  </span>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdownButton"
                  >
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                      >
                        Dashboard
                      </Link>
                    </div>
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <Link
                        to="/dashboard/update"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600"
                      >
                        Settings
                      </Link>
                    </div>
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <button
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-600"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
          ): (
            <Link to="/login" className={styles.getInTouch}>
            Sign in
          </Link>
          )}
          <Link to="/cart" className='m-3'>
          <div className="relative py-2">
                <div className="absolute t-0 left-3">
                  <p className="flex items-center justify-center w-2 h-2 p-3 text-xs text-white bg-red-500 rounded-full">
                    {cart.products.length}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mt-2 file:"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
          </Link>
        </div>
    </header>
  );
}