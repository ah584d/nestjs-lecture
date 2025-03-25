import { Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TcpService} from './services/tcp.service';

@Controller()
export class TcpController {
  constructor(private readonly tcpService: TcpService) {}

	@Get()
	getSystemHealth(): string {
		return this.tcpService.getSystemHealth();
	}

	@Post('/payment')
	publishMsg(): Observable<number> {
		try {
		console.log(`sends msg`);
		const result = this.tcpService.payment();
		return result;
		} catch(err) {
			console.log(`msg error: ${err}`);
		}
	}

	@Post('/paymentAsynch')
	publishMsgAsynch(): number {
		try {
			console.log(`sends msg`);
			const result = this.tcpService.paymentAsynch().subscribe((data:any)=>{
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
			this.tcpService.publishStats();
		} catch(err) {
			console.log(`event error: ${err}`);
		}
	}
}
