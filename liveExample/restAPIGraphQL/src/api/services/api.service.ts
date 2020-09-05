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
import { DbService } from './db/db.service';

@Injectable()
export class ApiService {
  constructor(private proxy: ProxyService, private dbService: DbService){}
	getHello(): string {
		return 'Hello World!';
	}

	getUsers() {
		return this.dbService.getUsers();
	};

	getUserById(idRank: string) {
		return  this.dbService.getUserById(idRank);
	};

	getPostByUserId(userId: string) {
		return this.dbService.getPostByUserId(userId);
	};

	getFollowers(userId) {
		return this.dbService.getFollowers(userId);
	}

	getUserAuth(userId: string): Observable<any> {
		return this.proxy.get(this.FAKE_URL.PERMSSIONS)
		.pipe(
			map((response: any) => response.data),
		);
	}

	addPost(message: PostDto): Observable<PostDto> {
		return this.proxy.post(message);
	}

	private FAKE_URL = {
		PERMSSIONS: 'https://run.mocky.io/v3/66804492-1753-477d-b679-97a14ef68982'
	}
}
