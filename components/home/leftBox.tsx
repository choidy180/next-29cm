import Image from "next/image"
import ImageExample from '@content/photo1/338772942_959750375049283_8588410005012949409_n.jpg'

const MainHomeLeftBox = () => {
    return (
        <div className={`w-[40vw] min-w-[380px] pr-[30px] flex flex-col justify-center items-center`}>
            <div className={`w-full h-[45vw] overflow-hidden flex justify-center items-center`}>
                <Image
                    src={ImageExample}
                    layout='fill'
                    objectFit='cover'
                    alt='Image'
                />
                <div className='absolute left-[20px] bottom-[20px]'>
                    <h2 className='text-4xl text-white text-shadow-xl'>AFTER PRAY</h2>
                    <h4 className='mt-[2px] text-xl pr-[12px] text-white text-shadow-xl'>애프터프레이 쇼케이스 단독 선발매~22% 및 증정 이벤트</h4>
                </div>
            </div>
        </div>
    )
}

export default MainHomeLeftBox