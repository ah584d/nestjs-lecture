import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingController } from './conrollers/billing.controller';

@Module({
  imports: [],
  controllers: [AppController, BillingController],
  providers: [AppService],
})
export class AppModule {}
