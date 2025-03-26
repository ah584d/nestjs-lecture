import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException(); // will return a nice error with code 401
    }

    // Note: we choose a property name of sub to hold our userId value to be consistent with JWT standards.
    const payload = { sub: user.userId, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
