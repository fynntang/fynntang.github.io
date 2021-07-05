import Footer from './footer'
import Meta from './meta'
import React from "react";

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Meta/>
            <div>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
