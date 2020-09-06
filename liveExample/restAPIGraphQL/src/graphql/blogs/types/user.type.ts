// defines the shape of output / response data that can be returned from the GraphQL server

import { ObjectType, Field, ID } from '@nestjs/graphql';
import { PostDto } from 'src/api/models/post.dto';
import { UserDto } from 'src/api/models/user.dto';
import { PostType } from './post.type';

@ObjectType('User')
export class UserType {
  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field(type => [PostType])
  posts: PostType[]

  @Field(type => [UserType])
  followers: UserType[]
}
