/**
 * Basic controller sample with a single route.
 * Controllers are responsible for handling incoming requests and returning responses to the client.
 * 
 * ORAL EXPLANATIONS:
 * In order to create a basic controller, we use classes and decorators.
 * Decorators associate classes with required metadata and enable Nest to create a routing map
 * (tie requests to the corresponding controllers).
 * // מוסיף מאטה דאטה 
 */

import { Controller, Get, HttpCode, Param, Post, Body } from '@nestjs/common';
import { ApiService } from './services/api.service';
import { PostDto } from './models/post.dto';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }


  @Get('/users')
  @HttpCode(200)
  getUsers(): any {
	  return this.apiService.getUsers();
  }

  @Get('/user/:id')
  @HttpCode(200)
  getUser(@Param('id') id): any {
	  return this.apiService.getUserById(id);
  }

  @Get('/posts')
  @HttpCode(200)
  getPosts(): any {
	  return this.apiService.getPosts();
  }

  @Get('/post/:id')
  @HttpCode(200)
  getPost(@Param('id') id): any {
	  return this.apiService.getPostById(id);
  }

  @Get('/followers')
  @HttpCode(200)
  getFollowers(): any {
	  return this.apiService.getFollowers();
  }

  @Get('/followers/user/:id')
  @HttpCode(200)
  getFollower(@Param('userId') userId): any {
	  return this.apiService.getFollowersByUser(userId);
  }


  @Post('/post/')
  @HttpCode(202)
  addPhone(@Body(new ValidationPipe()) post: PostDto): any {
	  console.log(JSON.stringify(post));
	  return this.apiService.addPost(post);
  }
}
