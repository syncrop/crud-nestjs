import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './mascotas/mascotas.module';

import { environment } from '../environment';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongodb),
    MascotasModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
