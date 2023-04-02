import Image from "next/image"
import CmLogo from '../assets/icons/logo29cm.png'

const Header = () => {
    return (
        <>
            <div className="w-[120px] h-[30px]">
                <Image
                    src={CmLogo}
                    alt="29CM-LOGO"
                    width={500}
                    height={500}
                />
            </div>
        </>
    )
}

export default Header