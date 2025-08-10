import { Animal } from 'src/animales/animal.entity';
import { Veterinario } from './../veterinarios/veterinario.entity';

import { ManyToOne, PrimaryGeneratedColumn,Entity,Column } from "typeorm";


@Entity()
export class Citas{

    @PrimaryGeneratedColumn()
    id_cita:number;

    @ManyToOne(()=> Veterinario,veterinario => veterinario.citas)
    veterinario:Veterinario;

     @ManyToOne(()=> Animal,animal => animal.citas)
    animal:Animal;

    @Column({type:'date'})
    fecha:Date;

    @Column()
    motivo:string;
}