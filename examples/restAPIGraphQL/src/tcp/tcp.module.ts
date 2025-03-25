import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { ClientProviderOptions } from '@nestjs/microservices/module/interfaces/clients-module.interface';
import { TcpController } from './tcp.controller';
import { TcpService } from './services/tcp.service';

const clientProviderOptionsTcp: ClientProviderOptions = {
	name: 'BILLING_SERVICE',
	transport: Transport.TCP,    // <---- transport layer
	options: {
		host:'p1.att.com',
		port : 9999
	}
};

@Module({
	imports: [
		ClientsModule.register([
			clientProviderOptionsTcp
		])
			
	],
	controllers: [TcpController],
	providers: [TcpService],
})
export class TcpModule {}
