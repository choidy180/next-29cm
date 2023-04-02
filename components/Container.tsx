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
            </Head>
            <div className="w-screen min-h-screen box-border flex flex-col justify-start items-center bg-[#FFFFFF] transition-colors">
                <Header/>
                {children}
            </div>
        </>
    )
}

 export default Container