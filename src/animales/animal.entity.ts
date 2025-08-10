
import { Citas } from "src/citas/citas.entity";
import { Usuario } from "src/usuarios/usuario.entity";
import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany } from "typeorm";


@Entity()
export class Animal{
    @PrimaryGeneratedColumn()
  id_animal: number;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  finca: string;
  

  @ManyToOne(()=> Usuario,usuario => usuario.animal)
  usuario:Usuario;

  @OneToMany(()=> Citas,citas => citas.animal)
  citas:Citas[];

}