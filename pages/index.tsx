import Image from 'next/image'
import ImageExample2 from '@content/photo1/339109565_931809438247862_7349856027746490367_n.jpg'
import ImageExample3 from '@content/photo1/339073353_200245679407956_6669137064219928531_n.jpg'
import MainHomeLeftBox from '@/components/home/leftBox'
import MainHomeRightBox from '@/components/home/rightBox'

export default function Home() {
	return (
		<>
			<div className='w-full flex justify-center items-start'>
				<MainHomeLeftBox/>
				<div className='w-[calc(30vw-15px)] min-w-[280px] flex flex-col justify-center items-center'>
					<div className='w-full h-[45vw] overflow-hidden flex justify-center items-center'>
						<Image
							src={ImageExample2}
							layout='fill'
							objectFit='cover'
							alt='Image'
						/>
						<div className='absolute w-full top-[50%] translate-y-[-50%]'>
							<h4 className='w-full text-sm pr-[12px] text-white text-shadow-xl text-center'>마리네 프랑소와 저버 단독 -50+5% 및 증정 이벤트</h4>
							<h2 className='text-4xl text-white mt-[10.5px] text-shadow-xl text-center'>AFTER PRAY</h2>
						</div>
					</div>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
				</div>
				<div className='w-[calc(30vw-15px)] min-w-[280px] flex flex-col justify-center items-center'>
					<div className='w-full h-[45vw] overflow-hidden flex justify-center items-center'>
						<Image
							src={ImageExample3}
							layout='fill'
							objectFit='cover'
							alt='Image'
						/>
						<div className='absolute w-full top-[50%] translate-y-[-50%]'>
							<h4 className='w-full text-sm pr-[12px] text-white text-shadow-xl text-center'>르 쇼케이스 단독 선발매 -20% 및 증정 이벤트</h4>
							<h2 className='text-4xl text-white mt-[10.5px] text-shadow-xl text-center'>le</h2>
						</div>
					</div>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
					<MainHomeRightBox/>
				</div>
			</div>
		</>
	)
}
