import { Citas } from 'src/citas/citas.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Veterinario {
  @PrimaryGeneratedColumn()
  id_veterinario: number;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;

  @OneToMany(()=> Citas, citas => citas.veterinario)
  citas:Citas[];
}
