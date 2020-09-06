// nestjs element

import { Injectable } from '@nestjs/common';
import { BlogsDB } from '../../db/users';
import { UserType } from '../types/user.type';

@Injectable()
export class UserService {
  constructor(private blogsDB: BlogsDB) {}

  getUsers(): UserType[] {
    return this.blogsDB.getUsers();
  }

  getUserById(id: number): UserType {
    return this.blogsDB.getUserById(id);
  }

  addOrUpdateUser(createUserInput){
    return this.blogsDB.createOrUpdateUser(createUserInput);
  }
}
