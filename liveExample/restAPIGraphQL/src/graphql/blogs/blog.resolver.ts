
// A Resolver provides a mapping between a portion of a GraphQL operation and actual
// backend code responsible for handling it (similar to a controller in a RESTful MVC backend).
import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";

import { PostType } from "./blog.type";
import { BlogPostsService } from "./blog.service";
import { CreateBlogInput } from "./create-blog.input";
import { ApiService } from "../../api/services/api.service";
import { UserType } from "./user.type";

@Resolver(of => PostType)
export class BlogResolver {
    constructor(private postService: BlogPostsService) { }

    @Query(returns => [PostType])
    posts() {
        return this.postService.getPosts();
    }

    @Query(returns => PostType)
    post(@Args('id') id: string) {
        return this.postService.getPostById(id);
    }

    @Mutation(returns => PostType)
    addPost(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
        return this.postService.addPost(createBlogInput);
	}
	
	@Query(returns => UserType)
    postsTitlesPerUser(@Args('user') user: string) {
        return this.postService.getUsers();
    }
	
}