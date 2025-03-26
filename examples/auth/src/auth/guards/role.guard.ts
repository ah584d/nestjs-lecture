import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../types/types';
import { ROLES_KEY } from '../roles.decorator';
import { Request } from 'express';

interface RequestWithRoles extends Request {
  body: {
    roles: Role[];
  };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request: RequestWithRoles = context.switchToHttp().getRequest();
    const userRole: Role[] = request.body?.roles;
    return requiredRoles.some((role) => userRole?.includes(role));
  }
}
