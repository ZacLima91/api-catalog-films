import { Body, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { Film } from './entity/films.entity';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  getAll(): Promise<Film[]> {
    return this.prisma.film.findMany();
  }

  getById(id: string): Promise<Film> {
    return this.prisma.film.findUnique({
      where: {
        id,
      },
    });
  }

  create(dto: CreateFilmDto): Promise<Film> {
    return this.prisma.film.create({
      data: dto,
    });
  }
}
