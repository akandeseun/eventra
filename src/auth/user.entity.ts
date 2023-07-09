import { UserStatus } from "src/enums/status.enum"
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm"

@Entity()
@Unique(["username"])
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ nullable: true })
  username: string

  @Column({ nullable: true })
  email: string

  @Column({ nullable: true })
  password: string

  @Column({ nullable: true })
  notes: string

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: string

  @Column({
    type: "bytea",
    nullable: true,
  })
  avatar: any

  @Column({
    type: "boolean",
    default: false,
    nullable: true,
  })
  verified: boolean
}
