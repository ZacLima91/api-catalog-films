import { Injectable } from '@nestjs/common';
import { Film } from './entity/films.entity';

@Injectable()
export class FilmsService {
  films: Film[] = [];

  getAll() {
    return this.films;
  }
}
