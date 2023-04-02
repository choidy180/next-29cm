import dynamic from "next/dynamic"
import Head from "next/head"

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
            <div className="w-screen min-h-screen box-border flex flex-col justify-start items-center bg-[#FFFFFF] transition-colors">
                <Header/>
                {children}
            </div>
        </>
    )
}

 export default Container