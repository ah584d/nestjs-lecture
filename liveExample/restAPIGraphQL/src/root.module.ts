/**
 * ORAL EXPLANATIONS:
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
import { ApiService } from './api/services/api.service';
import { ProxyService } from './services/proxy/proxy.service';
import { BlogsModule } from './graphql/blogs.module';
import { DbService } from './api/services/db/db.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
			GraphQLModule.forRoot({
				autoSchemaFile: true
			}),

			BlogsModule,

			ApiModule
		]
})
export class RootModule {}