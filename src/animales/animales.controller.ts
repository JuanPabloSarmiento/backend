import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { Animal } from './animal.entity';

@Controller('animales')
export class AnimalesController {
  constructor(private readonly animalesService: AnimalesService) {}

  // GET /animales
  @Get()
  findAll(): Promise<Animal[]> {
    return this.animalesService.findAll();
  }

  // GET /animales/:id
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Animal | null> {
    return this.animalesService.findOne(+id);
  }

   @Get('usuario/:id')
  buscarPorUsuario(@Param('id') id: number) {
    return this.animalesService.buscarPorUsuario(id);
  }

  // POST /animales
  @Post()
  create(@Body() animal: Animal): Promise<Animal> {
    return this.animalesService.create(animal);
  }

  // PUT /animales/:id
  @Put(':id')
  async update(@Param('id') id: string, @Body() animal: Animal): Promise<Animal> {
    const found = await this.animalesService.findOne(+id);
    if (!found) {
      throw new Error(`Animal con ID ${id} no encontrado`);
    }
    // Reemplazamos el ID por el que viene en la URL para asegurar consistencia
    animal.id_animal = +id;
    return this.animalesService.create(animal); // .save() actúa como create o update
  }

  // DELETE /animales/:id
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.animalesService.remove(+id);
  }
}
