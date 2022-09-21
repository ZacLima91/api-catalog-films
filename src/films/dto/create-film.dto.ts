import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateFilmDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'filme',
    description: 'Nome do filme a ser adicionado'
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'O filme trata sobre ...',
    description: 'Descriçao do filme a ser adicionado'
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    example: '1991',
    description: 'Ano de lançamento do filme a ser adicionado'
  })
  year: number;

  @IsUrl()
  @ApiProperty({
    example: 'http://image.com/filme',
    description: 'Imagem do filme a ser adicionado'
  })
  imageUrl: string;
}
