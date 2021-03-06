import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AudiosModule } from './audios/audios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AudiosModule, AuthModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
