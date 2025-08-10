import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CitasService } from './citas.service';
import { Citas } from './citas.entity';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}


  @Post()
  create(@Body() cita: Citas): Promise<Citas> {
    return this.citasService.create(cita);
  }


  @Get()
  findAll(): Promise<Citas[]> {
    return this.citasService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string): Promise<Citas | null> {
    return this.citasService.findOne(+id);
  }

 
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() datos: Partial<Citas>
  ): Promise<Citas | null> {
    return this.citasService.update(+id, datos);
  }

  
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.citasService.remove(+id);
  }
}
