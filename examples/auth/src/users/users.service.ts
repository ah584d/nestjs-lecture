import { Injectable } from '@nestjs/common';
import { User } from '../types/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      email: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return new Promise((resolve) => {
      const user = this.users.find((user: User) => user?.email === email);
      resolve(user);
    });
  }

  async createUser(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      const existingUser = this.users.find(
        (item: User) => item?.email === user?.email,
      );
      if (!existingUser) {
        resolve(user);
      }
      reject(new Error('User already exists'));
    });
  }
}
