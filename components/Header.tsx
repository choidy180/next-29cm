import Image from "next/image"
import CmLogo from '../assets/icons/logo29cm.png'
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";

const Header = () => {
    return (
        <div className="w-full h-auto py-[40px] px-[50px]">
            <div className="w-[120px] h-[30px]">
                <Image
                    src={CmLogo}
                    alt="29CM-LOGO"
                    width={120}
                    height={30}
                />
            </div>
            <div className="w-full h-[36px] flex justify-start items-center mt-[20px]">
                <h1 className="header-title">Special-Order</h1>
                <h1 className="header-title">Showcase</h1>
                <h1 className="header-title">PT</h1>
                <h1 className="header-title">Welove</h1>
            </div>
            <div className="w-full flex justify-start items-center mt-[8px]">
                <span className="header-sub">BEST</span>
                <span className="header-sub">WOMEN</span>
                <span className="header-sub">MEN</span>
                <span className="header-sub">INTERIOR</span>
                <span className="header-sub">KITCHEN</span>
                <span className="header-sub">ELECTRONICS</span>
                <span className="header-sub">DIGITAL</span>
                <span className="header-sub">BEAUTY</span>
                <span className="header-sub">FOOD</span>
                <span className="header-sub">LEISURE</span>
                <span className="header-sub">KIDS</span>
                <span className="header-sub">CULTURE</span>

                <div className="border-l-[#a7a7a7] border-solid border-l-[1.4px] mt-[-6px]">
                    <span className="header-sub-sub ml-[16px] leading-[14px] py-[4px] mt-[-6px]">Event</span>
                    <span className="header-sub-sub ml-[16px] leading-[14px] py-[4px] mt-[-6px]">LookBook</span>
                </div>
            </div>
            <div className="absolute right-[50px] top-[38px] flex items-center space-x-[14px] font-[300]">
                <p className="text-[14px] flex justify-center items-center space-x-[4px] cursor-pointer">
                    <FaUser className=""/>
                    <span>MY PAGE</span>
                </p>
                <p className="text-[14px] flex justify-center items-center space-x-[4px] cursor-pointer">
                    <FaHeart className=""/>
                    <span>MY LIKE</span>
                </p>
                <p className="text-[14px] flex justify-center items-center space-x-[4px] cursor-pointer">
                    <FaShoppingBag className=""/>
                    <span>SHOPPING BAG</span>
                </p>
                <p className="text-[14px] flex justify-center items-center space-x-[4px] cursor-pointer">
                    <GoSignIn className=""/>
                    <span>LOGIN</span>
                </p>
            </div>
        </div>
    )
}

export default Header