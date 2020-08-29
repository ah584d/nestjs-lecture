/**
 * ORAL EXPLANATIONS:
 *
 * A provider is simply a class annotated with an @Injectable() decorator.
 */


import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProxyService } from '../../services/proxy/proxy.service';
import { PostDto } from '../models/post.dto';
import { UserDto } from '../models/user.dto';

@Injectable()
export class ApiService {
  constructor(private proxy: ProxyService){}
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Observable<UserDto[]> {
	return this.proxy.get(this.FAKE_URL.ALL_USERS)
	.pipe(
		map((response: any) => response.data),
		//map(data => Object.values(data))
	);
  }

  getUserById(id: string): Observable<UserDto> {
	return this.proxy.get(this.FAKE_URL.USER_BY_ID, id)
	.pipe(
		map((response: any) => response.data)
	);
  }

  getPosts(): Observable<PostDto[]> {
	return this.proxy.get(this.FAKE_URL.ALL_POSTS)
	.pipe(
		map((response: any) => response.data),
		//map(data => Object.values(data))
	);
  }

  getPostById(id: string): Observable<PostDto> {
	return this.proxy.get(this.FAKE_URL.POST_BY_ID, id)
	.pipe(
		map((response: any) => response.data)
	);
  }

  getFollowers(): Observable<UserDto[]> {
	return this.proxy.get(this.FAKE_URL.ALL_FOLLOWERS)
	.pipe(
		map((response: any) => response.data),
		//map(data => Object.values(data))
	);
  }

  getFollowersByUser(id: string): Observable<UserDto[]> {
	return this.proxy.get(this.FAKE_URL.FOLLOWERS_BY_USER, id)
	.pipe(
		map((response: any) => response.data)
	);
  }


  addPost(message: PostDto): Observable<PostDto> {
	return this.proxy.post(message);
  }


  private FAKE_URL = {
	ALL_USERS: 'https://run.mocky.io/v3/83fce880-63b0-41d5-993c-75bfe90eb601',
	USER_BY_ID: 'https://run.mocky.io/v3/2532b056-a40e-46f1-84de-628522ba1992',
	ALL_POSTS: 'https://run.mocky.io/v3/fe7adbfd-aa7b-4539-b52e-25e0b13e0e26',
	POST_BY_ID: 'https://run.mocky.io/v3/011dbc1f-4b7c-4804-9173-b09aa21e6751',
	ALL_FOLLOWERS: 'https://run.mocky.io/v3/ee8aa628-3b1c-429f-a5ee-9bedad62deeb',
	FOLLOWERS_BY_USER: 'https://run.mocky.io/v3/bc5b4ed8-83bb-4b36-84c7-f26824afa219'
  }
}
