export interface ContentData {
    title: string;
    slug?: string;
    excerpt?: string;
    date: string;
    content: string;
    tags?: any[];
    categories?: any[];
    thumbnail?: string;
    seoKeywords?: string;
    seoDescription?: string;
}