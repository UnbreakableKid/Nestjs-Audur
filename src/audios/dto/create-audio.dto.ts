import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateAudioDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  readonly authorId: number;
}
