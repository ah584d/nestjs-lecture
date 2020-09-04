// nestjs element

import { Injectable } from "@nestjs/common";
import { BlogsDB } from "../../db/blogs";
import { PostType } from "./blog.type";
import { UserType } from "./user.type";


@Injectable()
export class BlogPostsService {
    constructor(private blogsDB: BlogsDB) { }

    getPosts(): PostType[] {
        return this.blogsDB.getBlogs();
    }

	// getUsers(): UserType[] {
    //     return this.blogsDB.getBlogs();
	// }
	
    getPostById(id: string): PostType {
        return this.blogsDB.getBlogById(id);
	}
	
	getPostUsersId(user: string): PostType {
        return this.blogsDB.getBlogById(user);
    }

    addPost(newBLog: PostType): PostType {
        return this.blogsDB.addBlog(newBLog);
    }
}
