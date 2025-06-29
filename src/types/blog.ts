export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
  author: Author;
  tags: string[];
  coverImage?: string;
}

export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export type BlogPostPreview = Omit<BlogPost, 'content'>; 