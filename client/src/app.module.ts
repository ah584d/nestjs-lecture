import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule, ClientOptions, ClientKafka } from '@nestjs/microservices';
import { ClientProviderOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';

const clientProviderOptionsTcp: ClientProviderOptions = {
	name: 'BILLING_SERVICE',
	transport: Transport.TCP,
	options: {
		host:'p1.att.com',
		port : 9999
	}
};

const clientProviderOptionsNats: ClientProviderOptions = {
	name: 'BILLING_SERVICE',
	transport: Transport.NATS,
	options: {
		url:'p1.att.com'
	}
};

@Module({
	imports: [
		ClientsModule.register([
			clientProviderOptionsTcp
		])
			
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
