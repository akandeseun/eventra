import { Injectable, UnauthorizedException } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { InjectRepository } from "@nestjs/typeorm"
import { Strategy, ExtractJwt } from "passport-jwt"
import { UserRepository } from "./user.repository"
import { User } from "./user.entity"
import { JwtPayload } from "./jwt-payload.interface"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload

    const user = await this.userRepository.findOne({
      where: { username },
    })

    if (!user) throw new UnauthorizedException()
    return user
  }
}
