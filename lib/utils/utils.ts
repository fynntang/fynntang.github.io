import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()
const contentPath = 'contents'



export async function getFiles(dataType: string) {
    return fs.readdirSync(path.join(root, contentPath, dataType), 'utf-8')
}

export async function getPostBySlug(dataType: string, slug: string) {
    const source = fs.readFileSync(path.join(root, contentPath, dataType, `${slug}.md`), 'utf8')

    const {data, content} = matter(source)

    return {
        frontMatter: data,
        markdownBody: content,
    }
}

export async function getAllPostsWithFrontMatter(dataType: string) {
    const files = fs.readdirSync(path.join(root, contentPath, dataType))

    // @ts-ignore
    return files.reduce((allPosts, postSlug) => {

        const data = matter(fs.readFileSync(path.join(root, contentPath, dataType, postSlug), 'utf8'))
        console.log('///////////////////////////////////')

        console.log(data)
        console.log(allPosts)
        console.log(postSlug)

        console.log('///////////////////////////////////')
        return [
            {
                frontMatter: {},
                slug: postSlug.replace('.md', ''),
            },
            ...allPosts,
        ]
    }, [])
}