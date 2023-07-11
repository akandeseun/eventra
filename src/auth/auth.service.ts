import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common"
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

  async signUp(authSignUpDto: AuthSignUpDto): Promise<User> {
    const { username, email, password } = authSignUpDto

    const user = new User()
    user.username = username
    user.email = email
    user.password = await this.userRepository.hashPassword(password)

    try {
      await user.save()
      delete user.password
      return user
    } catch (error) {
      console.log(error)
      if (error.code === "23505") {
        console.log(error.detail)
        throw new ConflictException("Username or email already exists")
      }
      throw new InternalServerErrorException("Something went wrong")
    }
  }
}
