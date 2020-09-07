import { Module } from '@nestjs/common';
import { LogicalController } from './conrollers/logical.controller';

@Module({
  imports: [],
  controllers: [LogicalController]
})
export class AppModule {}
