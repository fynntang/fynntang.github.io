import '../styles/globals.css'
import type {AppProps} from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import {ThemeProvider} from 'next-themes'

function App({Component, pageProps}: AppProps) {
    return (
        <>
            <NextNprogress color="#D1D5DB" height={2} options={{showSpinner: false}}/>
            <ThemeProvider defaultTheme="system" attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default App
