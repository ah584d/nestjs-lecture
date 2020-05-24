import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule, ClientOptions, ClientKafka } from '@nestjs/microservices';
import { ClientProviderOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';

const clientProviderOptions: ClientProviderOptions = {
	name: 'BILLING_SERVICE',
	transport: Transport.TCP,
	options: {
		port : 9999
	}
};

@Module({
	imports: [
		ClientsModule.register([
			clientProviderOptions
			// {
			// 	name: 'BILLING_SERVICE',
			// 	transport: Transport.TCP,
			// 	options: {
			// 		port : 9999
			// 	}
			// },
		])
			
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
