import { Module } from '@nestjs/common'; // Importa el decorador Module desde NestJS
import { UsuariosService } from './usuarios.service'; // Importa el servicio de usuarios
import { UsuariosController } from './usuarios.controller'; // Importa el controlador de usuarios
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa el módulo de TypeORM para la integración con base de datos
import { Usuario } from './usuario.entity'; // Importa la entidad Usuario

@Module({
  // Decorador que define un módulo en NestJS
  imports: [TypeOrmModule.forFeature([Usuario])], 
  // Importa el módulo de TypeORM y registra la entidad Usuario para inyección de dependencias del repositorio
  controllers: [UsuariosController],
  // Define el controlador que manejará las rutas relacionadas a usuarios
  providers: [UsuariosService],
  // Define los servicios que estarán disponibles para inyección en este módulo
})
export class UsuariosModule {} // Exporta el módulo de usuarios
