// defines the shape of output / response data that can be returned from the GraphQL server

import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Post')
export class PostType {
    @Field(type => ID)
    id: string;

	@Field()
	carrier?: string;

    @Field()
    age: number;

    @Field()
	imageUrl: string;

	@Field()
	name: string;

	@Field()
    snippet: string;
}