import { UserType } from '../blogs/types/user.type';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from 'src/graphql/blogs/inputs/user.input';
import { UserService } from 'src/graphql/blogs/services/user.service';

@Injectable()
export class BlogsDB {
  constructor() {
    this.createDB();
  }

  users: UserType[];

  createDB(): void {
    this.users = [
      {
        id: 1,
        name: 'Asaf',
        posts: [
          {
            title: 'graphQl is awesome',
            content: 'It really is:) ',
            comments: 'some comment',
          },
        ],
        followers: [],
      },
      {
        id: 2,
        name: 'Avraham',
        posts: [
          {
            title: 'Nest JS is awesome',
            content: 'It really is:) ',
            comments: 'some comment',
          },
        ],
        followers: [],
      },
      {
        id: 3,
        name: 'Michael Jordan',
        posts: [
          {
            title: 'The best athlete who have ever lived',
            content: 'Lebron who? ',
            comments: 'some comment',
          },
        ],
        followers: [],
      },
      {
        id: 4,
        name: 'Lebron James',
        posts: [
          {
            title: 'I am maybe top 5',
            content: '3 is half of 6',
            comments: 'some comment',
          },
        ],
        followers: [],
      },
    ];

    this.users[0].followers = [this.users[1], this.users[2], this.users[3]];
    this.users[1].followers = [this.users[0], this.users[2], this.users[3]];
    this.users[2].followers = [this.users[0], this.users[1], this.users[3]];
    this.users[3].followers = [this.users[0], this.users[1], this.users[2]];
  }

  getUsers(): UserType[] {
    return this.users;
  }

  getUserById(id): UserType {
    return this.users.find(user => user.id === id);
  }

  createOrUpdateUser(createUserInput: CreateUserInput) {
    if (createUserInput.id) {
      const user = this.users.find(user => createUserInput.id === user.id);
      if(!user){
        throw new NotFoundException('User was not found')
      }
      user.name = createUserInput.name;
      user.posts = createUserInput.posts;
      if (createUserInput.followers) {
        createUserInput.followers.forEach(follower => {
          if (follower.id) {
            user.followers.push(follower as UserType);
          } else {
            const newFollower = {
              id: this.users.length + 1,
              ...follower,
            };
            user.followers.push(newFollower as UserType);
          }
        });
        return user;
      }
    }
    const newUser = {
      id: this.users.length + 1,
      ...createUserInput,
    };
    this.users.push(newUser as UserType);
    return newUser;
  }
}
