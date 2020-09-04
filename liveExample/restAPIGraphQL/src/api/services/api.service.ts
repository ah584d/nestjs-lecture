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
