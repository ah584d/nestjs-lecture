/**
 *  EXPLANATIONS:
 * The root module of the application.
 * A module is a class annotated with a @Module() decorator.
 * The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
 * 
 * Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members
 * It can be attached to a class declaration,
 * method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
 * Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members
 */

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BlogsModule } from './graphql/blogs.module';
import { ApiModule } from './api/api.module';
import { TcpModule } from './tcp/tcp.module';

@Module({
  imports: [
			GraphQLModule.forRoot({
				autoSchemaFile: true
			}),

			BlogsModule,

			ApiModule,

			TcpModule
		]
})
export class RootModule {}