import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {DataTypeEnum} from "./DataTypeEnum";
import {ContentData} from "./ContentData";

export class Contents {
    contentPath: string = 'contents';
    dataType: string = DataTypeEnum.Posts;

    getAllData() {
        // @ts-ignore
        return (fs.readdirSync(this.getContentPath())).reduce((allFileData, filename) => {
            const fileData = matter(fs.readFileSync(path.join(this.getContentPath(), filename), 'utf-8'))
            let excerpt = fileData.content.split('\n').slice(0, 4).join(' ');
            let contentData: ContentData = {
                title: fileData.data.title,
                slug: filename.replace('.md', ''),
                content: fileData.content,
                excerpt: excerpt,
                date: fileData.data.date,
                categories: fileData.data.categories,
                seoDescription: fileData.data.seo_description || excerpt,
                seoKeywords: fileData.data.seo_keywords || (fileData.data.tags ?? []).toString(),
                tags: fileData.data.tags,
                thumbnail: fileData.data.thumbnail,
            }
            return [
                contentData,
                ...allFileData
            ];
        }, [])
    }

    private getContentPath(): string {
        return path.join(process.cwd(), this.contentPath, (this.dataType) ? this.dataType : '');
    }
}