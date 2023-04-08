import Image from "next/image"
import CmLogo from '../assets/icons/logo29cm.png'
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { useState } from "react";
import { HiChevronRight } from 'react-icons/hi';
import { useRouter } from "next/router";
import womenJson from '../json/navigation/women.json'
import menJson from '../json/navigation/men.json'
import interiorJson from '../json/navigation/interior.json'
import kitchenJson from '../json/navigation/kitchen.json'
import electronicsJson from '../json/navigation/electronics.json'
import digitalJson from '../json/navigation/digital.json'
import beautyJson from '../json/navigation/beauty.json'

const Header = () => {
    const [menuState, setMenuState] = useState<any>(null)
    const router = useRouter()
    return (
        <div className="w-full h-auto py-[40px]">
            <div className="w-[120px] h-[30px] ml-[50px]">
                <Image
                    src={CmLogo}
                    alt="29CM-LOGO"
                    width={120}
                    height={30}
                />
            </div>
            <div className="w-full h-[36px] flex justify-start items-center mt-[20px] px-[50px]">
                <h1 className="header-title">Special-Order</h1>
                <h1 className="header-title">Showcase</h1>
                <h1 className="header-title">PT</h1>
                <h1 className="header-title">Welove</h1>
            </div>
            <div className="w-full flex justify-start items-center mt-[8px] px-[50px]" onMouseLeave={() => setMenuState(null)}>
                <span className="header-sub">BEST</span>
                <span className="header-sub" onMouseOver={() => setMenuState(womenJson)}>WOMEN</span>
                <span className="header-sub" onMouseOver={() => setMenuState(menJson)}>MEN</span>
                <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>INTERIOR</span>
                <span className="header-sub" onMouseOver={() => setMenuState(kitchenJson)}>KITCHEN</span>
                <span className="header-sub" onMouseOver={() => setMenuState(electronicsJson)}>ELECTRONICS</span>
                <span className="header-sub" onMouseOver={() => setMenuState(digitalJson)}>DIGITAL</span>
                <span className="header-sub" onMouseOver={() => setMenuState(beautyJson)}>BEAUTY</span>
                <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>FOOD</span>
                <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>LEISURE</span>
                <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>KIDS</span>
                <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>CULTURE</span>

                {menuState && (
                    <div 
                        className="
                            absolute w-full py-[20px] px-[50px] top-[28px] left-0 border-[1px] border-solid border-[#e9e9e9] bg-white z-10
                            flex justify-start items-start 
                        "
                    >
                        <div className="w-[680px] flex justify-between items-start">
                            {
                                menuState.items.map((menuTab:any, i:any) => (
                                    <div 
                                        className="w-full flex flex-col justify-start items-start space-y-[6px]"
                                        key={`menuTab-${i}`}
                                    >
                                        {
                                            menuTab.map((content:any, i:any) => (
                                                <>
                                                    {
                                                        i === 0 ? 
                                                        (
                                                            <>
                                                                {
                                                                    content.title === ' ' ? 
                                                                    (
                                                                        <div 
                                                                            className="w-full h-[24px]"
                                                                            onClick={() => router.push(content.link)}
                                                                        />
                                                                    ) : 
                                                                    (
                                                                        <div 
                                                                            className="text-[16px] font-[700] flex justify-start items-center cursor-pointer"
                                                                            onClick={() => router.push(content.link)}
                                                                        >
                                                                            {content.title}
                                                                            {
                                                                                content.title !== ' ' && (
                                                                                    <HiChevronRight className="w-[20px] h-[20px]"/>
                                                                                )
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            </>
                                                        ) :
                                                        (
                                                            <div 
                                                                className="w-full text-[14px] cursor-pointer font-medium hover:font-[700]" 
                                                                onClick={() => router.push(content.link)}
                                                            >{content.title}</div>
                                                        )
                                                    }
                                                </>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}

                <div className="border-l-[#a7a7a7] border-solid border-l-[1.4px] mt-[-6px]" onMouseOver={() => setMenuState(null)}>
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