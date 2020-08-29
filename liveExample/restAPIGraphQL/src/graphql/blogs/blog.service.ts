// nestjs element

import { Injectable } from "@nestjs/common";
import { BlogsDB } from "../../db/blogs";
import { PostType } from "./blog.type";


@Injectable()
export class BlogPostsService {
    constructor(private blogsDB: BlogsDB) { }

    getPosts(): PostType[] {
        return this.blogsDB.getBlogs();
    }

    getPostById(id: string): PostType {
        return this.blogsDB.getBlogById(id);
    }

    addPost(newBLog: PostType): PostType {
        return this.blogsDB.addBlog(newBLog);
    }
}
