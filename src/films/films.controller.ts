import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Film } from '@prisma/client';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
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

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um filme',
  })
  delete(@Param('id') id: string): Promise<Film> {
    return this.filmsService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um filme',
  })
  update(@Param('id') id: string, @Body() dto: UpdateFilmDto): Promise<Film> {
    return this.filmsService.update(id, dto);
  }
}
