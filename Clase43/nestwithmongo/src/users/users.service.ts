import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersModel.create(createUserDto);
  }

  async findAll() {
    return await this.usersModel.find();
  }

  async findOne(id: string) {
    return await this.usersModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.usersModel.findByIdAndUpdate(id, updateUserDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.usersModel.findByIdAndDelete(id);
    return result;
  }
}
