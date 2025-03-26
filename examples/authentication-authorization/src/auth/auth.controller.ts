import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { User } from '../types/user.dto';
import { UsersService } from 'src/users/users.service';
import { Roles } from './roles.decorator';
import { Role } from '../types/types';
import { RolesGuard } from './guards/role.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() { email, password }: User) {
    return this.authService.signIn(email, password);
  }

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @UseGuards(RolesGuard)
  @Roles(Role.User)
  createUSer(@Body() user: User) {
    return this.userService.createUser(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: User) {
    return req.email;
  }
}
