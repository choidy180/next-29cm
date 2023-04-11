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
                        flex justify-between items-start
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

                    <div className='flex justify-center items-start'>
                        <div className='w-[170px] flex flex-col justify-start items-start'>
                            <h4 className='text-[12px] font-[700] h-[26px] flex justify-center items-center'>ABOUT US</h4>
                            <p className='bottom-notice'>회사소개</p>
                            <p className='bottom-notice'>인재채용</p>
                            <p className='bottom-notice'>상시 할인 혜택</p>
                        </div>
                        <div className='w-[170px] flex flex-col justify-start items-start'>
                            <h4 className='text-[12px] font-[700] h-[26px] flex justify-center items-center'>MY ORDER</h4>
                            <p className='bottom-notice'>주문배송</p>
                            <p className='bottom-notice'>취소/교환/반품 내역</p>
                            <p className='bottom-notice'>상품리뷰 내역</p>
                            <p className='bottom-notice'>증빙서류발급</p>
                        </div>
                        <div className='w-[170px] flex flex-col justify-start items-start'>
                            <h4 className='text-[12px] font-[700] h-[26px] flex justify-center items-center'>MY ACCOUNT</h4>
                            <p className='bottom-notice'>회원정보수정</p>
                            <p className='bottom-notice'>회원등급</p>
                            <p className='bottom-notice'>마일리지현황</p>
                            <p className='bottom-notice'>쿠폰</p>
                        </div>
                        <div className='w-[170px] flex flex-col justify-start items-start'>
                            <h4 className='text-[12px] font-[700] h-[26px] flex justify-center items-center'>HELP</h4>
                            <p className='bottom-notice'>1:1 문의내역</p>
                            <p className='bottom-notice'>마케틸 제휴, 입점, 대량 주문 문의</p>
                            <p className='bottom-notice'>상품 Q&A 내역</p>
                            <p className='bottom-notice'>공지사항</p>
                            <p className='bottom-notice'>FAQ</p>
                            <p className='bottom-notice'>고객의 소리</p>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-[14px] border-t-[1px] border-solid border-[#c7c7c7]'>
                    <p className='text-[12.5px] mt-[12px]'><b>개인정보처리방침</b><span className='mx-[14px] text-[#c2c2c2]'>|</span>이용약관</p>
                    <p className='text-[11px] mt-[5.5px] flex justify-start items-center'>상호명주식회사 무신사 (MUSINSA Co., Ltd.)사업장소재지서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 엔1)팩스070-8622-7737사업자등록번호211-88-79575통신판매업신고2022-서울성동-01952 <button className='text-white bg-gray-400 px-[8px] py-[3.4px] ml-[8px]'>사업자정보확인</button></p>
                    <p className='text-[11px] mt-[5.5px] flex justify-start items-center'>전화번호1644-0560이메일customer@29cm.co.kr대표한문일개인정보 보호책임자이인섭호스팅서비스(주)무신사</p>
                    <p className='text-[11px] mt-[5.5px] flex justify-start items-center'>일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.</p>
                    <p className='absolute right-[42px] top-[50%] text-[11.4px]'>
                        KG 에스크로<br/>가입 사실 확인
                    </p>
                </div>
            </div>   
        </>
    )
}

export default BottomBox