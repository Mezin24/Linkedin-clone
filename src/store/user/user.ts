export interface User {
  id: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface UserSchema {
  user: User | null;
}
