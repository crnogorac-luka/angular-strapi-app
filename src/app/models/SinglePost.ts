import { SingleMedia } from './SingleMedia';
import { User } from './User';

export class SinglePost {
  title: string;
  category: string;
  author: User | null;
  content: string;
  coverPhoto: SingleMedia | null;
  document: SingleMedia | null;
  isPublished: boolean;

  constructor(
    title: string,
    category: string,
    author: User | null,
    content: string,
    coverPhoto: SingleMedia | null,
    document: SingleMedia | null,
    isPublished: boolean
  ) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.content = content;
    this.content = content;
    this.coverPhoto = coverPhoto;
    this.document = document;
    this.isPublished = isPublished;
  }
}
