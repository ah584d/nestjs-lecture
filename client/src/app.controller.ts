import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSystemHealth(): string {
    return this.appService.getSystemHealth();
  }

  @Post('/publish-stats')
  async publishStats(): Promise<any> {
	  try {
		console.log(`publish stats as event`);
		const result = await this.appService.publishStats();
		return result;
	  } catch(err) {
		  console.log(`event error: ${err}`);
	  }
  }

  @Post('/payment')
  async publishMsg(): Promise<any> {
	  try {
		console.log(`sends msg`);
		const result = await this.appService.payment();
		return result;
	  } catch(err) {
		  console.log(`msg error: ${err}`);
	  }
  }
}
