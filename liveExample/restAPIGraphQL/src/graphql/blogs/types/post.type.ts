// defines the shape of output / response data that can be returned from the GraphQL server

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field()
  title?: string;

  @Field()
  content: string;

  @Field()
  comments: string;
}
