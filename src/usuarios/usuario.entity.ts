import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @Column()
    telefono: number;

    @Column()
    correo: string;

    @Column()
    contrasena: string;


}