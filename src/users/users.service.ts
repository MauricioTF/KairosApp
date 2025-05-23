import { Injectable } from '@nestjs/common';
import { users } from './users.Entity';
@Injectable()
export class UsersService {
  private user: users[] = [
    {
      cn_id_user: 0,
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
  
  
  createUser(
    cn_id_user: number,
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
    const newUser: users = {
        cn_id_user,
        ct_id_rol,
        cn_id,
        ct_name,
        ct_last_name,
        ct_email,
        ct_password,
        cn_phone,
        latitude,
        length,
        ct_adress
        };
  }
  updateUser(cn_id: number, user: any) {}
  deleteUser(cn_id: number) {}
}
