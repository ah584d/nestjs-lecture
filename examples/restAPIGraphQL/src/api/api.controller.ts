/**
 * Basic controller sample with a single route.
 * Controllers are responsible for handling incoming requests and returning responses to the client.
 * 
 * EXPLANATIONS:
 * In order to create a basic controller, we use classes and decorators.
 * Decorators associate classes with required metadata and enable Nest to create a routing map
 * (tie requests to the corresponding controllers).
 */

import { Controller, Get, HttpCode, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ApiService } from './services/api.service';
import { PostDto } from './models/post.dto';
import { ValidationPipe } from './pipes/validation.pipe';
import { AuthGuard } from './guards/auth.guard'

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {} // 1. <===== DI

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Get('/users')    // 2. <===== route path + decorator
  @HttpCode(200)
  getUsers(): any {
	  return this.apiService.getUsers();
  }

  @Get('/users/:id') // 3. <===== route path with param
  @HttpCode(200)
  getUser(@Param('id') userId): any {   // 4. <===== @Param
	  return this.apiService.getUserById(userId);
  }

  // 5 . service to db + other micro service
  @Get('users/:id/posts')
  @HttpCode(200)
  getPost(@Param('id') userId): any {
	  return this.apiService.getPostByUserId(userId);
  }

  @Get('users/:id/followers')
  @HttpCode(200)
  getFollowers(@Param('id') userId): any {
	  return this.apiService.getFollowers(userId);
  }
   // 6. <===== DEMO

   // 7. <==== guard 
  @Get('users/:id/permissions') // ---> request ---> middleware---> guard --> Controller --> pipe
  @UseGuards(AuthGuard) // Guards are executed after each middleware, but before any interceptor or pipe.
  @HttpCode(200)        // it return true or fale, request can pass or not
  getPermissions(@Param('id') userId): any {
	  return this.apiService.getUserAuth(userId);
  }


  // 8. <==== pipe 


  // 2 types of pipes:
  // transformation: transform input data to the desired form (e.g., from string to integer)
  // validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect
  @Post('/posts')
  @HttpCode(202)
  addPhone(@Body(new ValidationPipe()) post: PostDto): any {  // 9. <====== show DTO code
	  console.log(JSON.stringify(post));
	  return this.apiService.addPost(post);
  }
}
