import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthSignInDto {
  @IsNotEmpty({ message: "$property cannot be empty" })
  @IsEmail()
  email: string

  @IsNotEmpty({ message: "$property cannot be empty" })
  password: string
}
