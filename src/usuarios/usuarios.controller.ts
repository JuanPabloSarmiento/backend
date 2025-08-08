// Importación de decoradores y clases necesarias desde @nestjs/common
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

// Decorador que define que esta clase es un controlador y que todas sus rutas inician con /usuarios
@Controller('usuarios')
export class UsuariosController {
  // Inyección del servicio de usuarios
  constructor(private readonly usuariosService: UsuariosService) {}

  // Ruta POST /usuarios - Crea un nuevo usuario
  @Post()
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.create(usuario);
  }

  // Ruta GET /usuarios - Retorna todos los usuarios
  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  // Ruta GET /usuarios/:id - Retorna un usuario por su id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario | null> {
    return this.usuariosService.findOne(+id); // +id convierte el string a número
  }

  // Ruta PUT /usuarios/:id - Actualiza un usuario parcialmente
  @Put(':id')
  update(@Param('id') id: string, @Body() datos: Partial<Usuario>): Promise<Usuario | null> {
    return this.usuariosService.update(+id, datos); // Se permite actualizar solo algunos campos
  }

  // Ruta DELETE /usuarios/:id - Elimina un usuario por su id
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }
}
