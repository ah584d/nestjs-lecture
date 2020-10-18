import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

	@Get()
	getSystemHealth(): string {
		return this.appService.getSystemHealth();
	}

	@Post('/payment')
	publishMsg(): Observable<number> {
		try {
		console.log(`sends msg`);
		const result = this.appService.payment();
		return result;
		} catch(err) {
			console.log(`msg error: ${err}`);
		}
	}

	@Post('/paymentAsynch')
	publishMsgAsynch(): number {
		try {
			console.log(`sends msg`);
			const result = this.appService.paymentAsynch().subscribe((data:any)=>{
				console.log(`result of asynch operation: ${data}`);
				return result;
			});
		} catch(err) {
			console.log(`msg error: ${err}`);
		}
		return undefined;
	}

	@Post('/publish-stats')
	publishStats(): void {
		try {
			console.log(`publish stats as event`);
			this.appService.publishStats();
		} catch(err) {
			console.log(`event error: ${err}`);
		}
	}
}
