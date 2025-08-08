import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { VeterinariosService } from './veterinarios.service';
import { Veterinario } from './veterinario.entity';

@Controller('veterinarios')
export class VeterinariosController {
  constructor(private readonly veterinariosService: VeterinariosService) {}

  @Post()
  create(@Body() veterinario: Veterinario): Promise<Veterinario> {
    return this.veterinariosService.create(veterinario);
  }

  @Get()
  findAll(): Promise<Veterinario[]> {
    return this.veterinariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Veterinario | null> {
    return this.veterinariosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() datos: Partial<Veterinario>): Promise<Veterinario | null> {
    return this.veterinariosService.update(+id, datos);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.veterinariosService.remove(+id);
  }
}
