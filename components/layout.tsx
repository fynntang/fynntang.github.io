import Footer from '@components/footer'
import Meta from '@components/meta'
import React from "react";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Meta/>
            <main id="main" className={`main w-full min-h-full h-auto mx-auto pt-0 lg:pt-24`}>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout
