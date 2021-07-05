import Container from '@components/container'
import Layout from '@components/layout'
import Head from 'next/head'
import {CMS_NAME} from '@lib/constants'
import Header from "@components/header";

const Index = () => {
    return (
        <>
            <Head>
                <title>Home {CMS_NAME}</title>
            </Head>
            <Header/>
            <Layout>
                <Container>
                    Home
                </Container>
            </Layout>
        </>
    )
}

export default Index