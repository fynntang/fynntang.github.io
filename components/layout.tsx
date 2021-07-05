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
            <div>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
