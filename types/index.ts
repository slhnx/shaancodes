export interface Post {
  title: string;
  description: string;
  publishDate: string; // ISO date string format (YYYY-MM-DD)
  lastModified: string;
  slug: string;
  author: string;
  coverImage: string;
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  excerpt: string;
  originalUrl: string;
}
