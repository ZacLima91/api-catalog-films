import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { FilmsController } from "./films.controller";
import { FilmsService } from "./films.service";

@Module({
  imports: [PrismaModule],
  controllers: [FilmsController],
  providers: [FilmsService]
})
export class FilmsModule {}
