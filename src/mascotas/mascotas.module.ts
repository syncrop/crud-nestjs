import { Module } from '@nestjs/common';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MacotasSchema } from './mascotas.schema';

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'mascotas', schema: MacotasSchema}]),
    ],
    controllers: [MascotasController],
    providers: [MascotasService],
    //exports: [MascotasService]
  })
export class MascotasModule {}
