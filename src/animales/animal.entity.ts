import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Animal{
    @PrimaryGeneratedColumn()
  id_animal: number;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  disponibilidad: string;
}