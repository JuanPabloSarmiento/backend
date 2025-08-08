import { Module } from '@nestjs/common';
import { VeterinariosController } from './veterinarios.controller';
import { VeterinariosService } from './veterinarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Veterinario } from './veterinario.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Veterinario])],
  controllers: [VeterinariosController],
  providers: [VeterinariosService],
})
export class VeterinariosModule {}
