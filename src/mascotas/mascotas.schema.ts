import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MascotasDocument = Mascotas & Document;

@Schema()
export class Mascotas {
  @Prop({required: true})
  nombre: string

  @Prop({required: true})
  descripcion: string

  @Prop()
  imagen: string
}

export const MacotasSchema = SchemaFactory.createForClass(Mascotas);