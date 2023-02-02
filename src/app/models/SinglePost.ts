import { SingleMedia } from './SingleMedia';
import { User } from './User';

export class SinglePost {
  id: number;
  title: string;
  category: string;
  author: User | null;
  content: string;
  coverPhoto: SingleMedia | null;
  document: SingleMedia | null;

  constructor(
    id: number,
    title: string,
    category: string,
    author: User | null,
    content: string,
    coverPhoto: SingleMedia | null,
    document: SingleMedia | null
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.author = author;
    this.content = content;
    this.content = content;
    this.coverPhoto = coverPhoto;
    this.document = document;
  }
}
