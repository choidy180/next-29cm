import { IoChevronForward, IoLogoGooglePlaystore } from 'react-icons/io5'
import { AiFillInstagram } from 'react-icons/ai'
import { SiYoutubemusic, SiApple } from 'react-icons/si'

const BottomBox = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-start items-start px-[50px] py-[60px]">
                <div className="flex justify-start items-center">
                    <div className="w-[94px] flex justify-start items-center bg-[#303033] py-[4px] px-[10px] text-white mr-[4px] cursor-pointer">
                        <span className="text-[14px]">
                            FAQ
                        </span>
                        <IoChevronForward className='absolute w-[16px] h-[16px] right-[3px] top-[6px]'/>
                    </div>
                    <div className="w-[94px] flex justify-start items-center bg-[#303033] py-[4px] px-[10px] text-white cursor-pointer">
                        <span className="text-[14px]">
                            1:1 문의
                        </span>
                        <IoChevronForward className='absolute w-[16px] h-[16px] right-[3px] top-[6px]'/>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center mt-[12px]'>
                    <span className='text-[12px]'>※ 운영시간 : 평일 10:00 ~ 17:00 (점심시간 12:30 ~ 13:30 제외 / 주말 및 공휴일 제외)</span>
                    <div className='flex justify-center items-center space-x-[8px]'>
                        <AiFillInstagram className='w-[30px] h-[30px] cursor-pointer'/>
                        <SiYoutubemusic className='w-[24px] h-[24px] cursor-pointer'/>
                        <SiApple className='w-[24px] h-[24px] mt-[-2px] cursor-pointer'/>
                        <IoLogoGooglePlaystore className='w-[24px] h-[24px] cursor-pointer'/>
                    </div>
                </div>

                <div 
                    className='
                        w-full mt-[17px] pt-[9px] pb-[6px] border-t-[1px] border-solid border-[#c7c7c7]
                        flex justify-between items-center
                    '
                >
                    <div className='flex flex-col justify-start items-start'>
                        <h4 className='text-[12px] font-[700] h-[26px] flex justify-center items-center'>NOTICE</h4>
                        <p className='bottom-notice'>[공지] 개인정보 처리방침 사전 변경 안내 (시행일자 : 2023년 3월 10일 )</p>
                        <p className='bottom-notice'>[공지] 2023년 설 연휴 배송 공지</p>
                        <p className='bottom-notice'>[공지] [공지] ‘컬처, 책, 음반’ 카테고리 운영 종료 안내 ('23.4.11 시행)</p>
                        <p className='bottom-notice'>[공지] [공지] 리뷰운영 정책 사전 변경 안내 (22.12.21 시행)</p>
                        <p className='bottom-notice'>[29CM 공지] 29CM 앱 내 [LIKE 정렬] 오류 안내</p>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default BottomBox