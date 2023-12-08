export interface RegistrationUsers {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  device: string;
  user_type: 1;
  country: 0;
  date_of_birthday: string;
}

export interface User {
  access_token: string;
  refresh_token: string;
}

export interface AuthorizationUsers {
  email: string;
  password: string;
  device: string;
}
