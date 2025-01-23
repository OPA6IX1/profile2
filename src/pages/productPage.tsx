// import React from 'react'
import { useState } from "react";
import { MdStarBorder } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoPersonFill } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import image from "../assets/images/cloth.jpg";
import image2 from "../assets/images/cloth 2.jpg";
import image3 from "../assets/images/cloth3.jpg";
import image4 from "../assets/images/cloth4.jpg";
import Navbar from "../components/product/Navbar";

const productPage = () => {
  const [quantity, setQuantity] = useState<number>(1);
  
  const decreaseQuantity = () => {
    if (quantity === 1 || quantity < 1) {
      toast.error("You can't buy less than 1 item");
      return;
    }

    setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity === 9 || quantity > 9) {
      toast.error("You can't buy more than 9 items");
      return;
    }

    setQuantity(quantity + 1);
  };
  return (
    
    <div className=" flex w-full items-center justify-center pb-20">
      
    <div className="w-[90%] flex flex-col justify-between">
      <Navbar/>
      
      <div className="flex gap-4 items-center text-xs font-medium mt-10">
          <span>HOME</span>
          <MdOutlineKeyboardArrowRight />
          <span>SALES</span>
          <MdOutlineKeyboardArrowRight />
          <span>HOODIE</span>
        </div>
        <div className="mt-8 flex flex-col gap-16 lg:flex-row justify-between">
          
          {/* Product Images */}
          <div className="flex flex-col gap-10 w-full lg:w-[30%]">
            <div className="w-full">
              <img
                src={image}
                alt="image"
                className="w-full rounded-3xl"
              />
            </div>
            <div className="flex items-center justify-between">
              <img
                src={image2}
                alt=""
                className="h-[80px] w-[90px] rounded-lg"
              />
              <img
                src={image3}
                alt=""
                className="h-[80px] w-[90px] rounded-lg"
              />
              <img
                src={image4}
                alt=""
                className="h-[80px] w-[90px] rounded-lg"
              />
            </div>
          </div>
  
          {/* Product Details */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-5xl font-semibold leading-tight">Plaid Sleeve Kangaroo <br/>Pocket Drawstring Hoodie</h1>
            <p className="mt-2 text-lg">BY{" "} 
              <span className="text-blue-700 font-medium">COSMO FASHION</span>
            </p>
           <div className="mt-4 flex items-center gap-4">
              <div className="bg-gray-200 h-12 px-2 flex items-center justify-start rounded-lg w-fit">
                <span className="text-[#29B6F6] text-lg font-bold">$</span>
                <span className="text-blue-800 font-bold text-3xl">67</span>
                </div>
                 <div>
                  <p className="text-[#29B6F6] font-semibold text-xl"> SAVE 25% </p>
                  <p className="text-black font-semibold">inclusive deal of the day</p>
                  </div>
            </div>

              <p className="mt-4 text-gray-600">
                It is a long established fact that a reader will be<br/> distracted by the readable content of a page when<br/>
                looking at its layout.{" "}
              </p>
           
            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex items-center gap-4">
                <p className="text-lg">Quantity:</p>
                <div className="flex items-center gap-8">
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-200 disabled:opacity-50 disabled:text-blue-400 disabled:hover:bg-transparent"
                    onClick={decreaseQuantity}
                    
                  >
                    -
                  </button>
                  <div className="">{quantity}</div>
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-200 disabled:opacity-50 disabled:text-blue-400 disabled:hover:bg-transparent"
                    onClick={increaseQuantity}
                    
                  >
                    +
                  </button>
                </div>
              </div>
              <button className=" w-80 rounded-lg bg-blue-700 px-2 py-2 text-white hover:bg-blue-700">
              Add to Cart
            </button>
            </div>

               <hr className="my-4" />

              <div className="flex gap-4 justify-between">
              
              <GoPersonFill className="h-10 w-10 text-gray-500 inline font-bold"/>
              
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <section className="">
                      <h3 className="font-roboto text-[16px] font-semibold text-customGrey">Alex Morningstar</h3>
                      <h4 className="font-roboto text-[14px] font-medium text-customGrey">Contrary to popular belief</h4>
                  </section>

                  <div className="flex">
                  <MdOutlineStarPurple500   className="text-[#1565C0]  h-[25px] w-[30px]" />
                  <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
                  <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
                  <MdOutlineStarPurple500   className="text-[#1565C0] h-[25px] w-[30px]"/>
                  <MdStarBorder className="text-[#1565C0] h-[29px] w-[35px] border-blue-300"/>
                 
                  </div>
                  </div>

                      <p className="font-roboto text-[12px] font-thin text-customGrey w-[60%]">lorem ipsum is not simply random text.<br/> it has root in a piece of classical Latin</p>
                  
                  
                
              </div>
            </div>
          </div>
        </div>
    </div>
    <ToastContainer/>
    </div>
  )
}


export default productPage;
