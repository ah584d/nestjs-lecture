import { SetMetadata } from '@nestjs/common';
import { Role } from '../types/types';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

// SetMetadata is a function provided by NestJS that allows you to attach custom metadata to route handlers or class methods.
// ROLES_KEY is a constant key under which the roles metadata will be stored.
// Roles is a custom decorator that accepts a variable number of roles (using the spread operator ...roles: Role[]) and sets this metadata using SetMetadata.
