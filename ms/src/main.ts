import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

const microservicesOptionsTcp: MicroserviceOptions = {
	transport: Transport.TCP, // <--- transport layer 
	options: {
		port : 9999,
		retryAttempts: 3,
		retryDelay: 10000
	}
};


const microservicesOptionsNats: MicroserviceOptions = {
	transport: Transport.NATS,
	options: {
		url: '"nats://localhost:9999',
		maxReconnectAttempts : 3
	}
};
async function bootstrap() {
	 // ====> create micro service here
	const appTcpTransport = await NestFactory.createMicroservice <MicroserviceOptions>(AppModule, microservicesOptionsTcp);
	appTcpTransport.listen(() => console.log('Microservice is listening for event or messages'));
}
bootstrap();
