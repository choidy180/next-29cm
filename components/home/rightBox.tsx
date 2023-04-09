import Image from "next/image"
import ImageExample from '@content/photo1/338772942_959750375049283_8588410005012949409_n.jpg'
import IconExample from '@content/photo1/88a5ddba95b14b978a084228278f32e4_20230324114956.jpg'
import { IoIosHeartEmpty } from 'react-icons/io'


const MainHomeRightBox = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start pt-[60px] px-[20px] border-l-[1.4px] border-solid border-[#c7c7c7]">
            <div className="w-[59.3%] h-[4px] bg-black"/>
            <Image
                src={ImageExample}
                width={1000}
                height={1000}
                alt="Image"
                className="mt-[24px]"
            />
            <h4 className="text-xl mt-[14px] font-[500]">행복을 담은 선물</h4>
            <p className="mt-[14px]">둘이서 함께면 더욱더 즐겁죠. 센스있는 집들이 선물로도 추천합니다. 29CM에서 만나는 특별한 웨딩패키지로 만나보세요.</p>
            {
                [0,1,2].map((content, i) => (
                    <div key={i} className="w-full flex justify-center items-start mt-[14px] border-t-[1px] border-solid border-[#c7c7c7] cursor-pointer">
                        <div className="w-[calc(100%-65px)] py-[16px] pr-[20px] flex justify-start items-start">
                            <div className="flex justify-center items-center w-[54px] h-[54px]">
                                <Image
                                    src={IconExample}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Image"
                                /> 
                            </div>
                            <div className="flex flex-col justify-start items-start pl-[14px]">
                                <h4 className="text-[11.5px] font-[700]">마르디메크르디 르삭</h4>
                                <p className="text-[11px] mt-[4px] leading-[15px]">[4/4 순차배송] MINI HEART MRCD_BLACK BLACK</p>
                                <p className="text-[10.5px] mt-[8px] text-[#FF4800]">10% 80,100won</p>
                            </div>
                        </div>
                        <div className="w-[65px] h-[96px] py-[20px] border-l-[1px] border-solid border-[#c7c7c7] flex flex-col justify-center items-center">
                            <IoIosHeartEmpty className="w-[20px] h-[20px] text-[#a0a0a0] cursor-pointer"/>
                            <span className="text-[11px] mt-[8.5px] text-[#141414]">165</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MainHomeRightBox