import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { Citas } from './citas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Citas])],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}
