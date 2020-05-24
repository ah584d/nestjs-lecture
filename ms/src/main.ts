import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

const microservicesOptions: MicroserviceOptions = {
	transport: Transport.TCP,
	options: {
		port : 9999,
		retryAttempts: 3,
		retryDelay: 5000
	}
};
async function bootstrap() {
	const appTcpTransport = await NestFactory.createMicroservice <MicroserviceOptions>(AppModule, microservicesOptions);
	appTcpTransport.listen(() => console.log('Microservice is listening for event or messages'));
}
bootstrap();
