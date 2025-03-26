import { SecretType } from '../types/types';

export const jwtConstants: SecretType = {
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
  expiresIn: '120s',
};
