import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalesService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  create(animal: Animal): Promise<Animal> {
    return this.animalRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  findOne(id: number): Promise<Animal | null> {
    return this.animalRepository.findOneBy({ id_animal: id });
  }

  async remove(id: number): Promise<void> {
    await this.animalRepository.delete({ id_animal: id });
  }
}
