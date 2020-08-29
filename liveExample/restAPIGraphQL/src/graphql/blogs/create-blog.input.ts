import { InputType, Field } from "@nestjs/graphql";
import { MinLength } from "class-validator";

// Input type is the equivalent to data transfer object (DTO) in REST
@InputType()
export class CreateBlogInput {
    @Field()
    id: string

	@Field()
	carrier?: string;

    @Field()
    age: number;

    @Field()
	imageUrl: string;

	@MinLength(1)
	@Field()
	name: string;

	@Field()
    snippet: string;
}