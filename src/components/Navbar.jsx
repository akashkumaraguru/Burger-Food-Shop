import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiImportFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [change, setChange] = useState(true);
  console.log(change);
  return (
    <div className="max-w-[1660px] mx-auto flex justify-between items-center p-4 ">
      <div className="w-[20vw] flex items-center p-3 justify-evenly">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <RxHamburgerMenu size={30} />
        </div>

        <h1 className="text-xl sm:text-1xl lg:text-2xl flex  ml-2 px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        <div className="hidden lg:flex gap-2 items-center bg-gray-200 rounded-full cursor-pointer p-1 text-[14px]">
          <p
            className={`text-white rounded-full p-2 ${
              change === true ? "bg-black" : ""
            }`}
            onClick={() => setChange(!change)}
          >
            Delivery
          </p>
          <p
            className={`p-2 text-white rounded-full ${
              change === false ? "bg-black" : ""
            }`}
            onClick={() => setChange(!change)}
          >
            Pickup
          </p>
        </div>
      </div>

      {/*search...*/}
      <div className="bg-gray-200 rounded-full flex items-center px-2[200px] sm:w-[400px] lg:w-[400px] f">
        <BiSearch size={20} className="ml-3" />
        <input
          type="text"
          placeholder="search items"
          className="bg-transparent p-2 focus:outline-none"
        />
      </div>

      {/*cart...*/}
      <div className="flex">
        <button className="bg-black text-white w-[90px] flex ml-4 p-3 items-center rounded-lg">
          <IoCart size={20} className="mr-2" />
          Cart
        </button>
        <button className="border border-black text-black w-[90px] flex ml-4 p-3 items-center rounded-lg">
          <RiAccountCircleFill size={20} className="mr-2" /> Login
        </button>
      </div>

      {/*Mobile menu */}
      {nav ? (
        <div className="bg-white/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/*Side menu */}
      <div
        className={
          nav
            ? "fixed top-5 left-0 w-[300px] h-screen bg- z-10 duration-300"
            : "fixed top-5 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <MdClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />

        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <MdOutlineFavorite size={25} className="mr-4" />
              Favourites
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <IoMdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <BiSolidPurchaseTag size={25} className="mr-4" />
              promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <RiImportFill size={25} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-black/20 w-[15w] rounded p-4 ">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
