export class User {
  username: string;
  email: string;
  role: number;

  constructor(username: string, email: string, role: number) {
    this.username = username;
    this.email = email;
    this.role = role;
  }
}
