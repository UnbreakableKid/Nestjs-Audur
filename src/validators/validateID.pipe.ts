import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

interface User {
  authorId: number;
}

//custom validate pipe to verify if user id exists in prisma database
@Injectable()
export class ValidateIDPipe implements PipeTransform<User> {
  constructor(private usersService: UsersService) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    const { authorId } = value;

    const user = await this.usersService.findOne(authorId);
    if (!user) {
      throw new HttpException("User doesn't exist", HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
