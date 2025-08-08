import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veterinario } from './veterinario.entity';

@Injectable()
export class VeterinariosService {
  constructor(
    @InjectRepository(Veterinario)
    private veterinarioRepository: Repository<Veterinario>,
  ) {}

  create(veterinario: Veterinario): Promise<Veterinario> {
    return this.veterinarioRepository.save(veterinario);
  }

  findAll(): Promise<Veterinario[]> {
    return this.veterinarioRepository.find();
  }

  findOne(id: number): Promise<Veterinario | null> {
    return this.veterinarioRepository.findOneBy({ id_veterinario: id });
  }

  async remove(id: number): Promise<void> {
    await this.veterinarioRepository.delete({id_veterinario: id});
  }

  async update(id: number, datos: Partial<Veterinario>): Promise<Veterinario|null> {
  await this.veterinarioRepository.update({ id_veterinario: id }, datos);
  return this.findOne(id); // Retorna el veterinario actualizado
}

}
