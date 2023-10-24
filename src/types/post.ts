export interface IPost {
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
}

export interface PostData {
  id: string;
  data: IPost;
}

export interface PostDbModel {
  id: string;
  name: string;
  description: string;
  message: string;
  photoUrl?: string;
  timestamp?: string;
}
