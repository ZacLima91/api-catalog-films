import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Film } from './entity/films.entity';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService){}

  getAll(): Promise<Film[]> {
    return this.prisma.film.findMany();
  }
}
