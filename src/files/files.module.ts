import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { FilesController } from './controllers/files.controller';
import { FilesService } from './files.service';
import { GridFsMulterConfigService } from './multer-configuration.service';
import { FilesSchema } from './schemas/file-info.schema';

@Module({
    // imports: [MulterModule.register({dest: './files'})],
    imports: [
        // MongooseModule.forFeature([{name: 'images', schema: FilesSchema}]),
        MulterModule.registerAsync({
            useClass: GridFsMulterConfigService,
        })],
    providers: [GridFsMulterConfigService, FilesService],
    controllers: [FilesController],
})
export class FilesModule { }