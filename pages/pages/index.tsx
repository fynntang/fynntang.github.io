import {useRouter} from "next/router";
import Layout from "@components/layout";
import Container from "@components/container";
import Header from "@components/header";


type Props = {
    IndexPage: {}
}

const IndexPage = ({IndexPage}: Props) => {
    const router = useRouter()


    return (
        <>
            <Header/>
            <Layout>
                <Container>
                    Pages Index
                </Container>
            </Layout>
        </>
    )
}

export default IndexPage

export const getStaticProps = async () => {
    return {
        props: {},
    }
}