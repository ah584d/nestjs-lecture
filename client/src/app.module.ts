import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';


@Module({
	imports: [
		ClientsModule.register([
			{ name: 'BILLING_SERVICE', transport: Transport.TCP },
		]),
		ClientsModule.register([
			{
			  name: 'HERO_SERVICE',
			  transport: Transport.KAFKA,
			  options: {
				client: {
				  clientId: 'hero',
				  brokers: ['localhost:9092'],
				},
				consumer: {
				  groupId: 'hero-consumer'
				}
			  }
			},
		  ]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
