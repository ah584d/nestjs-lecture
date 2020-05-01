
import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class BillingController {
  @MessagePattern({ cmd: 'sum' })
  getTotalCommand(data: number[]): number {
	console.log(`process msg... : ${JSON.stringify(data)}`);
    return (data || []).reduce((a, b) => a + b);
  }

//   @MessagePattern({ cmd: 'sum' })
// 	async accumulate(data: number[]): Promise<number> {
//   return (data || []).reduce((a, b) => a + b);
// 	}

// @MessagePattern({ cmd: 'sum' })
// accumulate(data: number[]): Observable<number> {
//   return from([1, 2, 3]);
// }


@EventPattern('user_stats')
async handleUserStats(data: Record<string, unknown>) {
  console.log(`Event received: ${JSON.stringify(data)}`)
}


// @MessagePattern('time.us.*')
// getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
//   console.log(`Subject: ${context.getSubject()}`); // e.g. "time.us.east"
//   return new Date().toLocaleTimeString(...);
// }
}