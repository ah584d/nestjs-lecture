// nest js element

import { Module } from '@nestjs/common';
import { BlogResolver } from './blogs/blog.resolver';
import { BlogPostsService } from './blogs/blog.service';
import { BlogsDB } from '../db/blogs';

@Module({
  providers: [
    BlogResolver,
    BlogPostsService,
    BlogsDB
  ],
  exports: []
})
export class BlogsModule { }