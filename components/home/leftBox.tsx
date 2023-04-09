import MainHomeLeftContentBox from "./leftBoxContent"

const MainHomeLeftBox = () => {
    return (
        <div className="w-[40vw] flex flex-col justify-start items-start">
            <MainHomeLeftContentBox/>
            <MainHomeLeftContentBox/>
            <MainHomeLeftContentBox/>
            <MainHomeLeftContentBox/>
        </div>
    )
}

export default MainHomeLeftBox