import { Role } from './types';

export interface User {
  userId: number;
  email: string;
  password: string;
  roles?: Role[];
}
