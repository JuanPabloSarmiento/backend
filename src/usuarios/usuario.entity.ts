import { Animal } from "src/animales/animal.entity";
import { Entity,PrimaryGeneratedColumn,Column, OneToMany } from "typeorm";

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @Column()
    telefono: number;

    @Column({unique:true})
    correo: string;

    @Column()
    contrasena: string;

   @OneToMany(()=> Animal,animal => animal.usuario)
   animal:Animal[]
}
