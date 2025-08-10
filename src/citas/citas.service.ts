import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Citas } from './citas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitasService {
    constructor(@InjectRepository(Citas)
    private citasRepository: Repository<Citas>
    ){}


    create(citas: Citas): Promise<Citas>{
        return this.citasRepository.save(citas);
    };

    findOne(id:number): Promise<Citas | null > {
        return this.citasRepository.findOneBy({id_cita:id});
    }

    findAll():  Promise<Citas[]> {
        return this.citasRepository.find();
    }
    async remove(id:number) {
        await this.citasRepository.delete({id_cita:id})
    }
    async update(id:number,datos:Partial<Citas>):Promise<Citas|null>{
        await this.citasRepository.update({id_cita:id},datos);
        return this.citasRepository.findOneBy({id_cita:id})
    }

}
