
export type FilmPreviewData = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type FilmsPreviewData = FilmPreviewData[];

export type UserData = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
};

export type User = Omit<UserData, 'token'>

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export type AuthData = {
  login: string;
  password: string;
};
