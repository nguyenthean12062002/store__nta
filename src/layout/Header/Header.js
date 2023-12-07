import React, { useState, useContext, useEffect } from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from "../Nav/Nav";
import { BsList } from "react-icons/bs";
//cart context
import { CartContext } from "../../component/cart/CartContext";
// login context
import { LoginContext } from "../../component/login/LoginProvider";
// list item nav
import { ListItemNav } from "../Nav/Nav";
const Header = (props) => {
  const navigate = useNavigate();
  const { user, logout, login } = useContext(LoginContext);
  const [isHeader, setIsHeader] = useState(false);
  // moblie
  const [isMobile, setIsMobile] = useState(false);
  // show sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const { cout } = useContext(CartContext);
  // get user from localstorages
  useEffect(() => {
    const valueUser = localStorage.getItem("name");
    if (valueUser) {
      user.name = valueUser;
      login(valueUser);
    }
    if (window.innerWidth <= 450) {
      setIsMobile(true);
    }
  }, []);
  // scrool của thằng header khi cuộn trang
  window.addEventListener("scroll", (item) => {
    if (window.scrollY >= 10) {
      setIsHeader(true);
    } else if (window.scrollY <= 20) {
      setIsHeader(false);
    }
  });
  const Sidebar = () => {
    return (
      <div
        hidden={showSidebar}
        className="top-0 left-0 absolute bg-slate-300 w-[60%] h-[100vh] z-[100]"
      >
        <ListItemNav />
      </div>
    );
  };
  return (
    <div className=" relative transition-all duration-200">
      {isMobile ? (
        <>
          <div className=" w-full h-[60px] flex items-center justify-center border-b-[1px]">
            {/* logo and nav */}
            <div
              className={`${
                isHeader
                  ? "shadow-md bg-slate-200 z-90 fixed top-0 transition-all duration-300"
                  : ""
              }   right-0 min-w-[100vw] w-full h-[60px]  flex items-center justify-between px-full  z-10`}
            >
              {/* sidebar control */}
              <div
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                <BsList className="text-[1.6rem] cursor-pointer" />
              </div>
              {/* logo */}
              <a
                href="/"
                className="text-[20px]  md:text-[25px] lg:text-[30px] font-bold italic font-serif tracking-[5px]"
              >
                N
                <span className="text-main text-[2.1rem] italic underline">
                  T
                </span>
                A
              </a>

              {/* cart */}
              <div
                className="cart relative"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <AiOutlineShoppingCart className="text-[29px] cursor-pointer" />
                <div className="cursor-pointer absolute bottom-[-4px] right-[16px] bg-red-400 text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                  {cout}
                </div>
              </div>
            </div>
            <Sidebar />
            {/* over lay */}
            <div
              hidden={showSidebar}
              onClick={() => {
                setShowSidebar(true);
              }}
              className="z-[99] top-0 right-0 left-0 absolute bg-[rgba(0,0,0,0.4)] w-full h-[100vh]"
            ></div>
          </div>
        </>
      ) : (
        <>
          <div className="z-[99] w-full h-[60px] flex items-center justify-between border-b-[1px]">
            {/* logo and nav */}
            <div
              className={`${
                isHeader
                  ? "shadow-md bg-slate-200 z-90 fixed top-0 transition-all duration-300"
                  : ""
              }   right-0 min-w-[100vw] w-full h-[60px]  flex items-center justify-between px-full z-10`}
            >
              {/* logo */}
              <a
                href="/"
                className="text-[20px] md:text-[25px] lg:text-[30px] font-bold italic font-serif tracking-[5px]"
              >
                N
                <span className="text-main text-[2.1rem] italic underline">
                  T
                </span>
                A
              </a>
              {/* navigation */}
              <div className="flex-1 w-full h-full flex items-center justify-center">
                <Nav />
              </div>
              {/* cart */}
              <div
                className="cart relative"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <AiOutlineShoppingCart className="text-[29px] cursor-pointer" />
                <div className="cursor-pointer absolute bottom-[-4px] right-[16px] bg-red-400 text-white  w-[17px] h-[17px] flex items-center justify-center rounded-full text-[0.9rem]">
                  {cout}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* overlay */}
    </div>
  );
};

export default Header;
