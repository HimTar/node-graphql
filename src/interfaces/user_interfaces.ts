interface NewUser {
  name: string;
  email: string;
  password: string;
}

interface UserSchema {
  name: string;
  email: string;
}

interface LoginUser {
  token: string;
  email: string;
  name: string;
}

export { NewUser, LoginUser };
