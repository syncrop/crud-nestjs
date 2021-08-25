import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FilesDocument = Files & Document;

@Schema()
export class Files {

    @Prop()
    length: number;

    @Prop()
    chunkSize: number;

    @Prop()
    filename: string;    

    @Prop()
    md5: string;

    @Prop()
    contentType: string;
}

export const FilesSchema = SchemaFactory.createForClass(Files);