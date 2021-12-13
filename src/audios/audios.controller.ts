import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseInterceptors,
  UploadedFile,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'path';
import { AudiosService } from './audios.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Controller('audios')
export class AudiosController {
  constructor(private readonly audiosService: AudiosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createAudioDto: CreateAudioDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.audiosService.create(createAudioDto);
  }

  @Get()
  findAll() {
    return this.audiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.audiosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioDto: UpdateAudioDto) {
    return this.audiosService.update(+id, updateAudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audiosService.remove(+id);
  }
}
