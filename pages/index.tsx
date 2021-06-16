import {getAllPostsWithFrontMatter} from "../lib/utils";

export type BlogFrontMatter = {
    title: string
    description: string
    publishedDate: string
    tags: string[]
}

export type BlogLayoutProps = {
    children: React.ReactNode
    frontMatter: BlogFrontMatter
    wordCount: number
    readingTime: string
}

export type BlogPostProps = {
    slug: string
    siteTitle: string
    frontMatter: BlogFrontMatter
    markdownBody: any
    wordCount: number
    readingTime: string
}

export type BlogPostsProps = {
    posts?: BlogPostProps[]
}

export interface BlogProps extends BlogPostsProps {
    title: string
    description: string
}

export default function Home({posts, title, description}: BlogProps) {
    // console.log(posts)

    return (
        <>
            <div>{title} ====== {description}</div>

            {posts && posts.map((post) => {
                console.log(post)
                return (
                    <div key={post.slug}>
                        <h5>{post.frontMatter.title}</h5>
                        <p>{post.frontMatter.description}</p>
                        {/*<p>[ {post.frontMatter.tags.join(', ')} ]</p>*/}
                    </div>
                )

            })}

        </>
    )
}


export async function getStaticProps() {
    const posts = await getAllPostsWithFrontMatter('_posts')
    console.log(posts)
    return {
        props: {
            posts,
            title: 'Blog',
            description: 'Posts on software engineering',
        },
    }
}