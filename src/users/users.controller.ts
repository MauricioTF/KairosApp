import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  holamundo() {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(@Body() newUser:createUserDto){
    
    return this.usersService.createUser(newUser.ct_id_rol, newUser.cn_id, newUser.ct_name, newUser.ct_last_name,newUser.ct_email, newUser.ct_password, newUser.cn_phone, newUser.latitude, newUser.length, newUser.ct_adress)
  }
}
