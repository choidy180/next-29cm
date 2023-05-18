const Login = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            {/* container */}
            <div className="w-full flex flex-col justify-center items-center max-w-[400px] py-[50px]">
                <h1 className="text-[44px] font-[NanumSquareNeo-Variable] mb-[20px]">로그인</h1>
                <div className="w-full pt-[18px] border-t-[4px] border-solid border-black"></div>
                <div className="w-full flex flex-col justify-center items-center">
                    <input 
                        type="text" 
                        className="
                            w-full border-[1px] border-solid border-[#d4d4d4] h-[48px] px-[14px] rounded-[2px] 
                            outline-none focus:border-black font-[GmarketSansMedium] font-[14px]
                            placeholder:font-[Pretendard-Regular] placeholder:translate-y-[2px]
                        "
                        placeholder="아이디(이메일)"
                    />
                    <input 
                        type="password" 
                        className="
                            w-full mt-[8px] border-[1px] border-solid border-[#d4d4d4] h-[48px] 
                            px-[14px] rounded-[2px] outline-none focus:border-black font-[GmarketSansMedium] font-[14px]
                            placeholder:font-[Pretendard-Regular]
                        "
                        placeholder="비밀번호"
                    />
                </div>
                <div className="w-full mt-[14px] bg-black text-white h-[56px] flex justify-center items-center font-[700] text-[16px] cursor-pointer">
                    <span className="pointer-events-none select-none">로그인하기</span>
                </div>
                <div className="w-full flex flex-col justify-center items-center my-[35px]">
                    <h1 className="font-[500]">SNS 계정으로 로그인하기</h1>
                </div>
            </div>
        </div>
    )
}

export default Login