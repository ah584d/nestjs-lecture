import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export class UserEventStats {
	constructor(public url?:string, public details?:any) {}
}
@Injectable()
export class AppService {

	private flipFlop = true;

	constructor(
		@Inject('BILLING_SERVICE') private client: ClientProxy) {}

	private getRandom() :number {
		return Math.floor(Math.random() * 100);
	}

	payment(): Observable<number> {
		const pattern = 'sum';
		const payload = [this.getRandom(), this.getRandom(), this.getRandom()];
						// .send<ReturnType, ParamType>(pattern, param)
		return this.client.send<number, number[]>(pattern, payload);
	}

	async publishStats() {
		if(this.flipFlop) {
			this.client.emit<number>('user_stats', new UserEventStats('/catalog/sku?34567', {'duration': Math.floor(this.getRandom()/2), 'origin': 'IL', 'profile': 'unknown'}));
		} else {
			this.client.emit<number>('user_stats', new UserEventStats('/catalog/sku?3489', {'duration': Math.floor(this.getRandom()/6), 'origin': 'RU', 'profile': 'https://www.facebook.com/kelly.r.obennick?pageid=8576093908&ftentidentifier=10158388782688909&padding=0'}));
		}
		this.flipFlop = !this.flipFlop;
	}

	getSystemHealth(): string {
		return `system up and running! ${new Date().toISOString()}`;
	}
}
