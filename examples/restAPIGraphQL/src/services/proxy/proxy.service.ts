import { Injectable, HttpService } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProxyService {
	constructor(private httpService: HttpService) {}

	get(url: string, param?: any): Observable<AxiosResponse<any[]>> {
		return this.httpService.get(url);
	}

	post(message: any): Observable<any> {
		return of(`resource successfully created`);
	}
}
