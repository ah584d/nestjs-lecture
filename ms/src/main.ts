import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
	const appTcpTransport = await NestFactory.createMicroservice < MicroserviceOptions > (
		AppModule, {
			transport: Transport.TCP,
			options: {
				retryAttempts: 3,
				retryDelay: 5000
			}
		},
	);
	appTcpTransport.listen(() => console.log('Microservice is listening for event or messages'));

	const appKafka = await NestFactory.createMicroservice < MicroserviceOptions > (AppModule, {
		transport: Transport.KAFKA,
		options: {
			client: {
				brokers: ['localhost:9092'],
			}
		}
	});
	appKafka.listen(() => console.log('Microservice kafka is listening for messages'));

}
bootstrap();
