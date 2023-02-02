export class User {
  id: number;
  username: string;
  email: string;
  role: number;

  constructor(id: number, username: string, email: string, role: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
  }
}
