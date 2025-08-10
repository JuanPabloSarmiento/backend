import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/usuario.entity';
import { VeterinariosModule } from './veterinarios/veterinarios.module';
import { Veterinario } from './veterinarios/veterinario.entity';
import { AnimalesModule } from './animales/animales.module';
import { Animal } from './animales/animal.entity';
import { CitasModule } from './citas/citas.module';
import { Citas } from './citas/citas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'veterinaria.sqlite',
      entities: [Usuario,Veterinario,Animal,Citas],
      synchronize: true,
    }),
    UsuariosModule,
    VeterinariosModule,
    AnimalesModule,
    CitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
