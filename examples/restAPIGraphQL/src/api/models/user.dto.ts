import { IsNotEmpty } from 'class-validator';

export class UserDto {
	id: string;

	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	birthday: Date;

	address: {};
}