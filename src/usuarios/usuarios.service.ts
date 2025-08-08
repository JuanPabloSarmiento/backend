import { Injectable } from '@nestjs/common'; // Importa el decorador Injectable de NestJS
import { InjectRepository } from '@nestjs/typeorm'; // Permite inyectar un repositorio de TypeORM
import { Repository } from 'typeorm'; // Importa el tipo Repository de TypeORM
import { Usuario } from './usuario.entity'; // Importa la entidad Usuario

@Injectable() // Indica que esta clase puede ser inyectada como dependencia
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) // Inyecta el repositorio de la entidad Usuario
    private usuarioRepository: Repository<Usuario>, // Repositorio de usuarios para realizar operaciones de base de datos
  ) {}

  create(usuario: Usuario): Promise<Usuario> {
    // Método para crear un nuevo usuario en la base de datos
    return this.usuarioRepository.save(usuario); // Guarda el usuario y devuelve la promesa del usuario creado
  }

  findAll(): Promise<Usuario[]> {
    // Método para obtener todos los usuarios
    return this.usuarioRepository.find(); // Devuelve todos los registros de la tabla Usuario
  }

  findOne(id: number): Promise<Usuario | null> {
    // Método para obtener un usuario por su ID
    return this.usuarioRepository.findOneBy({ id_usuario: id }); // Busca un usuario por el campo id_usuario
  }

  async update(id: number, datosActualizados: Partial<Usuario>): Promise<Usuario | null> {
    // Método para actualizar un usuario con ciertos campos
    await this.usuarioRepository.update({ id_usuario: id }, datosActualizados); // Actualiza los campos del usuario
    return this.findOne(id); // Retorna el usuario actualizado
  }

  async remove(id: number): Promise<void> {
    // Método para eliminar un usuario por su ID
    await this.usuarioRepository.delete({ id_usuario: id }); // Elimina el usuario con el ID especificado
  }
}
