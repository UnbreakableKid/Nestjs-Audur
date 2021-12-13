import { IsEmail } from 'class-validator';

export class EmailValidator {
  @IsEmail()
  email: string;
}
