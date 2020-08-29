
import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Controller()
export class BillingController {

	// define the message pattern for this method
	@MessagePattern('sum')
	getTotalCommand(data: number[]): number {
		console.log(`process msg... : ${JSON.stringify(data)}`);
		return (data || []).reduce((a, b) => a + b);
	}

	// define the message pattern for this method
	@MessagePattern('sumAsynch')
	getTotalCommandAsync(data: number[]): Observable<number> {
		console.log(`process msg... : ${JSON.stringify(data)}`);
		const result = (data || []).reduce((a, b) => a + b);
		return of(result).pipe(delay(5000));
	}

	@EventPattern('user_stats')
	async handleUserStats(data: Record<string, unknown>) {
	console.log(`Event received: ${JSON.stringify(data)}`);
	}
}