// import React from "react";
import { Routes, Route} from "react-router-dom";
import Profile from "./pages/profile";
import ProductPage from "./pages/productPage";
import SignUp from "./pages/signUp";

function App() {
  return (
    <>
      <nav className="h-16 w-full flex justify-center fixed top-0 left-0 bg-white shadow-lg shadow-blue-500 z-50">
        <div className="w-[90%] flex gap-12 items-center justify-between">
          <h1 className="hidden md:flex text-lg md:text-2xl italic font-semibold text-blue-600">
            Opa6ix
          </h1>
          <ul className="flex items-center gap-8 text-sm md:text-lg">
            <li className="hover:text-blue-500">
              <a href="/profile">Profile</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="/product">Product Page</a>
            </li>
            <li>
              <a href="/">
                <button className="bg-blue-500 hover:bg-blue-800 py-2 px-8 rounded text-white text-base font-semibold">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="mt-16">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
