import { Injectable } from '@nestjs/common';
import { users } from './users.Entity';
import { v4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  private user: users[] = [
    {
      cn_id_user: '',
      ct_id_rol: '1',
      cn_id: 0,
      ct_name: 'Juan',
      ct_last_name: 'Pérez',
      ct_email: 'a@a.com',
      ct_password: '123',
      cn_phone: 123456789,
      latitude: 0,
      length: 0,
      ct_adress: 'Calle 1',
    },
  ];

  getAllUsers() {
    return this.user;
  }
  getUserById(cn_id: number) {}
  
  async createUser(
    ct_id_rol: string,
    cn_id: number,
    ct_name: string,
    ct_last_name: string,
    ct_email: string,
    ct_password: string,
    cn_phone: number,
    latitude: number,
    length: number,
    ct_adress: string,
  ) {

    const salt = await bcrypt.genSalt(10);

    // Cifra la contraseña utilizando el salt generado
    const hashedPassword = await bcrypt.hash(ct_password, salt);

    const newUser: users = {
        cn_id_user: v4(),
        ct_id_rol,
        cn_id,
        ct_name,
        ct_last_name,
        ct_email,
        ct_password : hashedPassword,
        cn_phone,
        latitude,
        length,
        ct_adress
        };
        this.user.push(newUser);
        return newUser;
  }
  updateUser(cn_id: number, user: any) {}
  deleteUser(cn_id: number) {}
}
