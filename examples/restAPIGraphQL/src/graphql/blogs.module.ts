// nest js element

import { Module } from '@nestjs/common';
import { BlogResolver } from './blogs/blog.resolver';
import { UserService } from './blogs/services/user.service';
import { BlogsDB } from '../graphql/db/users';

@Module({
  providers: [
    BlogResolver,
    UserService,
    BlogsDB
  ],
  exports: []
})
export class BlogsModule { }