import { TypeOrmModuleOptions } from "@nestjs/typeorm"

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "akandeseun44",
  database: "eventra-db",
  autoLoadEntities: true,
  synchronize: true,
}
