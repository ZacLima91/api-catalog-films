import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Film } from '@prisma/client';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilmsService } from './films.service';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos os filmes',
  })
  getAll(): Promise<Film[]> {
    return this.filmsService.getAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Lista filme por id',
  })
  getById(@Param('id') id: string): Promise<Film> {
    return this.filmsService.getById(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo filme',
  })
  create(@Body() dto: CreateFilmDto): Promise<Film> {
    return this.filmsService.create(dto);
  }
}
