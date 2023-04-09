import dynamic from "next/dynamic"
import Head from "next/head"
import BottomBox from "./Bottom"

const Header = dynamic(() => import ('./Header'),{
    ssr: false
})

const Container = ({children}:any) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <title>감도 깊은 취향 셀렉트샵 29CM</title>
            </Head>
            <div className="w-screen min-w-[1024px] min-h-screen overflow-x-hidden box-border flex flex-col justify-start items-start bg-[#FFFFFF] transition-colors">
                <Header/>
                {children}
                <BottomBox/>
            </div>
        </>
    )
}

 export default Container