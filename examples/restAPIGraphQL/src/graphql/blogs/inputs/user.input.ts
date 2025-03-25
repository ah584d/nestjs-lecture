import { PostType } from './../types/post.type';
import { UserType } from './../types/user.type';
// defines the shape of output / response data that can be returned from the GraphQL server

import {Field, ID, InputType } from '@nestjs/graphql';
import { CreatePostInput } from './posts.input';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  name?: string;

  @Field(type => [CreatePostInput])
  posts: CreatePostInput[]

  @Field(type => [CreateUserInput])
  followers: CreateUserInput[]
}
