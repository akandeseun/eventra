import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserRepository } from "./user.repository"
import { User } from "./user.entity"
import { AuthSignUpDto } from "./dto/auth-signup.dto"

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async testFn(name: string) {
    const user = new User()
    user.username = name

    await user.save()
    return user
  }

  async signUp(authSignUpDto: AuthSignUpDto) {
    const { username, email, password } = authSignUpDto

    const user = new User()
    user.username = username
    user.email = email
    user.password = password

    await user.save()
    delete user.password

    return user
  }
}
