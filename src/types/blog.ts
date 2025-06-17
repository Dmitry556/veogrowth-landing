
export interface Author {
  name: string;
  avatarUrl: string;
  title: string;
}

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  publishDate: string;
  readingTime: string;
  imageUrl: string;
  featured?: boolean;
  content?: string;
  tableOfContents?: Array<{
    id: string;
    title: string;
  }>;
}
