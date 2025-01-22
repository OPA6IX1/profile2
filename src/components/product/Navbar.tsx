// import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoPersonFill } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";





const Navbar = () => (

  <div className="w-full flex items-center justify-between pb-2 pt-4">
     <span className="text-customBlue text-3xl font-Mukta font-semibold ">
          Cosmo
     </span>
      
      <ul className="hidden lg:flex gap-8 items-center text-lg font-mukta">
        <li>
          <a href="#" className="hover:text-blue-700">
            Sales
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
           Hoddie 
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-700">
            Fashion
          </a>
        </li>
        <li className="flex items-center">
          <a href="#" className="hover:text-blue-700">
            More
          </a>
          <MdOutlineKeyboardArrowDown />
        </li>
      </ul>
    
    <div className="flex gap-8 items-center ">
        <form className="flex items-center gap-2 border-2 px-4 py-1 rounded-full">
          <IoSearchOutline />
          <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-customGray font-mukta font-light"
         />
        </form>



          <article className="relative">
            <IoBagHandle size={20}/>
            <span className="absolute -top-0.5 -right-1 h-3 w-3 bg-red-600 rounded-full flex items-center justify-center text-[.5rem] font-semibold text-white text-customGray">3</span>
          </article>
          <div>
            <GoPersonFill size={22}/>
          </div>
          
        </div>
        </div>
);

export default Navbar;
