import { Module } from '@nestjs/common';
import { AudiosService } from './audios.service';
import { AudiosController } from './audios.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AudiosController],
  providers: [AudiosService, PrismaService],
})
export class AudiosModule {}
