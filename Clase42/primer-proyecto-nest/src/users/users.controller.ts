import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

//localhost:3000/users/all
//Ruteo /api/users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //users?limit=10
  @Get()
  findAll(@Query('limit') limit: string) {
    console.log(limit);
    const users = this.usersService.findAll();
    return { status: 'success', users };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if(isNaN(+id))
      throw new HttpException('Invalid param', HttpStatus.BAD_REQUEST);
    console.log(id);
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
