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
import { DbService } from './services/db/db.service';
import { PostDto } from './models/post.dto';
import { ValidationPipe } from './pipes/validation.pipe';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService,
				private readonly dbService: DbService) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }


  @Get('/users')
  @HttpCode(200)
  getUsers(): any {
	  return this.dbService.getUsers();
  }

  @Get('/users/:id')
  @HttpCode(200)
  getUser(@Param('id') userId): any {
	  return this.dbService.getUserById(userId);
  }


  @Get('users/:id/posts')
  @HttpCode(200)
  getPost(@Param('id') userId): any {
	  return this.dbService.getPostByUserId(userId);
  }

  @Get('users/:id/followers')
  @HttpCode(200)
  getFollowers(@Param('id') userId): any {
	  return this.dbService.getFollowers(userId);
  }

  @Get('users/:id/permissions')
  @HttpCode(200)
  getPermissions(@Param('id') userId): any {
	  return this.apiService.getUserAuth(userId);
  }

  @Post('/post')
  @HttpCode(202)
  addPhone(@Body(new ValidationPipe()) post: PostDto): any {
	  console.log(JSON.stringify(post));
	  return this.apiService.addPost(post);
  }
}
