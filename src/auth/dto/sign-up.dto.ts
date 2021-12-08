import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsUserAlreadyExist } from '../../user/is-user-already-exist.validator';

export class SignUp {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @Validate(IsUserAlreadyExist)
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
