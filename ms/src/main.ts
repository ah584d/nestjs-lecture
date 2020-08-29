import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions, NatsOptions } from '@nestjs/microservices';

const microservicesOptionsTcp: MicroserviceOptions = {
	transport: Transport.TCP,
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
	const appTcpTransport = await NestFactory.createMicroservice <MicroserviceOptions>(AppModule, microservicesOptionsNats);
	appTcpTransport.listen(() => console.log('Microservice is listening for event or messages'));
}
bootstrap();
