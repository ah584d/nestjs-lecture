
import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable, from, of } from 'rxjs';

@Controller()
export class BillingController {

	// define the message pattern for this method
	@MessagePattern('sum')
	getTotalCommand(data: number[]): number {
		console.log(`process msg... : ${JSON.stringify(data)}`);
		return (data || []).reduce((a, b) => a + b);
	}


	// define the message pattern for this method
	@MessagePattern('sum')
	getTotalCommandAsync(data: number[]): Observable<number> {
		console.log(`process msg... : ${JSON.stringify(data)}`);
		const result = (data || []).reduce((a, b) => a + b);
		return of(result);
	}

	@EventPattern('user_stats')
	async handleUserStats(data: Record<string, unknown>) {
	console.log(`Event received: ${JSON.stringify(data)}`);
	}


}