export class SingleMedia {
  extension: string;
  name: string;
  url: string;

  constructor(extension: string, name: string, url: string) {
    this.extension = extension;
    this.name = name;
    this.url = url;
  }
}
