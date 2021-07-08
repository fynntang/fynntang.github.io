import {getPageBySlug} from "@lib/api";
import Page from '../../types/page'
import Container from "@components/container";
import Header from "@components/header";
import PostTitle from "@components/post-title";
import Head from "next/head";
import {CMS_NAME} from "@lib/constants";
import PostBody from "@components/post-body";
import Layout from "@components/layout";
import {useRouter} from "next/router";
import ErrorPage from "next/error";

type Props = {
    AboutPage: Page
}

const AboutPage = ({AboutPage}: Props) => {
    const router = useRouter()

    if (!router.isFallback && !AboutPage?.slug) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <Layout>
            <Head>
                <title>{AboutPage.title} | Next.js Blog Example with {CMS_NAME}</title>
                <meta property="og:image" content={AboutPage.ogImage.url}/>
            </Head>
            <Header/>
            <Container>
                {router.isFallback ? (<PostTitle>Loading…</PostTitle>) : (
                    <>
                        <article>
                            <PostBody content={AboutPage.content}/>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export default AboutPage

export const getStaticProps = async () => {
    const AboutPage = getPageBySlug('about', ['title', 'date', 'slug', 'content', 'ogImage', 'coverImage',])
    return {
        props: {AboutPage},
    }
}
