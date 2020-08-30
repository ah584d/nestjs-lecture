// defines the shape of output / response data that can be returned from the GraphQL server

import { ObjectType, Field, ID } from "@nestjs/graphql";
import { PostDto } from "src/api/models/post.dto";
import { UserDto } from "src/api/models/user.dto";

@ObjectType('User')
export class UserType {
    @Field(type => ID)
    id: string;

	@Field()
	name: string;

    @Field()
    posts: PostDto[];

    @Field()
	followers: UserDto[];
}