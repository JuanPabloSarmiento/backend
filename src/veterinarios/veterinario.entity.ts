import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Veterinario {
  @PrimaryGeneratedColumn()
  id_veterinario: number;

  @Column()
  nombre: string;

  @Column()
  especialidad: string;

  @Column()
  dueño: string;
}
