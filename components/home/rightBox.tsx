import AutoHeightImage from "../index/AutoHeightImage"
import ImageExample from '@content/photo1/338772942_959750375049283_8588410005012949409_n.jpg'

const MainHomeRightBox = () => {
    return (
        <div className="w-full flex justify-start items-center py-[6vw] px-[20px] border-l-[1.4px] border-solid border-[#c7c7c7]">
            <div className="w-[59.3%] h-[4px] bg-black"/>
            <AutoHeightImage alt='testImage' src={ImageExample} />
        </div>
    )
}

export default MainHomeRightBox