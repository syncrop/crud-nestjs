import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mascotas, MascotasDocument } from './mascotas.schema';
import { Model } from 'mongoose';
import { MascotasCrearDto } from './dto/mascotas-crear.dto';


@Injectable()
export class MascotasService {
    constructor(@InjectModel('mascotas') private readonly mascotaModel: Model<MascotasDocument>) {}

    async findAll(): Promise<Mascotas[]> {
        try {
            return await this.mascotaModel.find().exec();
        } catch (error) {
            return null; 
        }
    }

    async saveElement(mascotasCrearDto: MascotasCrearDto): Promise<Mascotas>{
        const crear = new this.mascotaModel(mascotasCrearDto);
        return await crear.save();
    }

    async findById(id: string): Promise<Mascotas>{
        try {
            return await this.mascotaModel.findById(id).exec();
        } catch (error) {
            return null; 
        }
    }

    async edit(id: string, mascota: MascotasCrearDto): Promise<Mascotas>{
        try {
            return await this.mascotaModel.findByIdAndUpdate(id, mascota,{new: true}).exec();
        } catch (error) {
            return null;
        }
    }

    async remove(id: string): Promise<Mascotas>{
        try {
            return await this.mascotaModel.findByIdAndRemove(id).exec();
        } catch (error) {
            return null;
        }
    }
        
    
}
