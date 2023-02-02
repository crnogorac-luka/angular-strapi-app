export class SingleMedia {
  id: number;
  extension: string;
  name: string;
  url: string;

  constructor(id: number, extension: string, name: string, url: string) {
    this.id = id;
    this.extension = extension;
    this.name = name;
    this.url = url;
  }
}
