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
import foodJson from '../json/navigation/food.json'
import leisureJson from '../json/navigation/leisure.json'
import kidsJson from '../json/navigation/kids.json'
import cultureJson from '../json/navigation/culture.json'

const Header = () => {
    const [menuState, setMenuState] = useState<any>(null)
    const router = useRouter()
    return (
        <div className="w-full h-auto py-[40px] overflow-x-visible">
            <div className="w-[120px] h-[30px] ml-[50px]">
                <Image
                    src={CmLogo}
                    alt="29CM-LOGO"
                    width={120}
                    height={30}
                />
            </div>
            <div className="w-full min-w-[1200px] h-[44px] flex justify-start items-center mt-[20px] px-[50px]">
                <h1 className="header-title">Special-Order</h1>
                <h1 className="header-title">Showcase</h1>
                <h1 className="header-title">PT</h1>
                <h1 className="header-title">Welove</h1>
            </div>
            <div className="flex justify-start items-center mt-[8px] px-[50px] overflow-x-visible" onMouseLeave={() => setMenuState(null)}>
                <div className="border-r-[#a7a7a7] border-solid border-r-[1.4px] overflow-x-visible flex flex-wrap justify-start items-start mr-[160px] min-[1400px]:mr-[0px]">                
                    <span className="header-sub">BEST</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(womenJson)} onClick={() => console.log(menuState)}>WOMEN</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(menJson)}>MEN</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(interiorJson)}>INTERIOR</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(kitchenJson)}>KITCHEN</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(electronicsJson)}>ELECTRONICS</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(digitalJson)}>DIGITAL</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(beautyJson)}>BEAUTY</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(foodJson)}>FOOD</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(leisureJson)}>LEISURE</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(kidsJson)}>KIDS</span>
                    <span className="header-sub" onMouseOver={() => setMenuState(cultureJson)}>CULTURE</span>
                    <div className="flex flex-col absolute top-[7px] right-0 min-[1200px]:flex-row mr-[-100px] min-[1200px]:mr-[-160px] text-[15px] space-y-[2px] min-[1200px]:space-y-[-6px]" onMouseOver={() => setMenuState(null)}>
                        <span className="header-sub-sub w-auto ml-[16px] leading-[14px] py-[4px] mt-[-6px]">Event</span>
                        <span className="header-sub-sub w-auto ml-[16px] leading-[14px] py-[4px] mt-[-6px]">LookBook</span>
                    </div>
                </div>


                {menuState && (
                    <div 
                        className="
                            absolute w-full py-[20px] px-[50px] top-[108px] z-[999999] xl:top-[28px] left-0 border-[1px] border-solid border-[#e9e9e9]
                            flex justify-start items-start bg-white
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
                                                                className="text-[14px] cursor-pointer font-medium hover:font-[700]" 
                                                                onClick={() => router.push(content.link)}
                                                            >
                                                                {content.title}
                                                            </div>
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
            </div>
            <div className="absolute right-[50px] top-[44px] items-center space-x-[14px] font-[300] hidden md:flex">
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