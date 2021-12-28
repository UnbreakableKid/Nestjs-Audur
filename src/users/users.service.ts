import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { supabase } from 'src/utils/supabaseClient';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    await supabase.auth.api.inviteUserByEmail(createUserDto.email);

    // return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({ where: { id } });
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findFirst({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  removeByEmail(email: string) {
    return this.prisma.user.delete({ where: { email } });
  }
}
