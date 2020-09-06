// A Resolver provides a mapping between a portion of a GraphQL operation and actual
// backend code responsible for handling it (similar to a controller in a RESTful MVC backend).
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { UserService } from './services/user.service';
import { UserType } from './types/user.type';
import { CreateUserInput } from './inputs/user.input';

@Resolver(of => UserType)
export class BlogResolver {
  constructor(private userService: UserService) {}

  @Query(returns => [UserType])
  users() {
    return this.userService.getUsers();
  }

  @Query(returns => UserType)
  user(@Args('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Mutation(returns => UserType)
  addOrUpdateUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.addOrUpdateUser(createUserInput);
  }
}
