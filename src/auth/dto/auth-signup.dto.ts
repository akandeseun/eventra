import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class AuthSignUpDto {
  @IsNotEmpty({ message: "$property cannot be empty" })
  @IsString()
  username: string

  @IsNotEmpty({ message: "$property cannot be empty" })
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty({ message: "$property cannot be empty" })
  @IsString()
  password: string

  @IsNotEmpty({ message: "$property cannot be empty" })
  @IsString()
  notes: string
}
