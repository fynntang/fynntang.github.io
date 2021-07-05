import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import Link from 'next/link'

const Header = () => {
    const router = useRouter()

    const [startSearching, setStartSearching] = useState<boolean>(false)
    const [endSearching, setEndSearching] = useState<boolean>(false)

    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <header id="header"
                    className={`leading-snug lg:border-0 border-b border-gray-200 dark:border-gray-800 transition-all lg:bg-transparent bg-white duration-300 grid grid-cols-6 fixed top-0 h-auto w-full lg:py-4 lg:px-5 py-2 px-1 z-10 ${
                        scrollPosition > 0 ? 'lg:bg-white dark:bg-gray-800 shadow' : ''
                    }`}>

                <div className="col-start-1 col-end-2 flex lg:space-x-2">

                </div>
                <div className="col-start-5 col-end-7 flex space-x-2 justify-end">
                    {router.asPath.split('/').length > 2 ? (<></>) : (<></>)}
                    <Link href="/">Home</Link>
                    <Link href="/pages">Pages</Link>

                </div>

                <div
                    className={scrollPosition > 0 ? 'col-start-3 col-end-5 items-center justify-center pt-1' : 'hidden'}>
                    <div className="cursor-pointer mx-auto hidden lg:flex space-x-3 items-center justify-center">

                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
