import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Injectable()
export class AudiosService {
  constructor(private prisma: PrismaService) {}

  create(createAudioDto: CreateAudioDto) {
    return this.prisma.audio.create({ data: createAudioDto });
  }

  findAll() {
    return this.prisma.audio.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} audio`;
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return `This action updates a #${id} audio`;
  }

  remove(id: number) {
    return `This action removes a #${id} audio`;
  }
}
