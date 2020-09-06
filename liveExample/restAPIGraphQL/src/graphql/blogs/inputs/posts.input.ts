// defines the shape of output / response data that can be returned from the GraphQL server

import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title?: string;

  @Field()
  content: string;

  @Field()
  comments: string;
}
