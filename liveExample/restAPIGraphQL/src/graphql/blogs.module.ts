// nest js element

import { Module } from '@nestjs/common';
import { BlogResolver } from './blogs/blog.resolver';
import { BlogService } from './blogs/blog.service';
import { BlogsDB } from '../db/blogs';

@Module({
  providers: [
    BlogResolver,
    BlogService,
    BlogsDB
  ],
  exports: []
})
export class BlogsModule { }