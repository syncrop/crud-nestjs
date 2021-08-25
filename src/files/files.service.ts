import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose'
import { Connection } from 'mongoose'
import { MongoGridFS } from 'mongo-gridfs'
import { GridFSBucketReadStream } from 'mongodb'
import { response } from 'express';

@Injectable()
export class FilesService {
  private fileModel: MongoGridFS;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.fileModel = new MongoGridFS(this.connection.db, 'fs');
  }

  async uploadFile(files): Promise<File[]>{
    const response = [];
    files.forEach(file => {
        const fileReponse = {
            originalname: file.originalname,
            encoding: file.encoding,
            mimetype: file.mimetype,
            id: file.id,
            filename: file.filename,
            metadata: file.metadata,
            bucketName: file.bucketName,
            chunkSize: file.chunkSize,
            size: file.size,
            md5: file.md5,
            uploadDate: file.uploadDate,
            contentType: file.contentType,
        };
        response.push(fileReponse);
    });
    return response;
  }

//   async readStream(id: string): Promise<GridFSBucketReadStream> {
//     return await this.fileModel.readFileStream(id);
//   }

//   async findInfo(id: string): Promise<FileInfoVm> {
//     const result = await this.fileModel
//       .findById(id).catch( err => {throw new HttpException('File not found', HttpStatus.NOT_FOUND)} )
//       .then(result => result)
//     return{
//       filename: result.filename,
//       length: result.length,
//       chunkSize: result.chunkSize,
//       md5: result.md5,
//       contentType: result.contentType      
//     }
//   }

//   async deleteFile(id: string): Promise<boolean>{
//     return await this.fileModel.delete(id)
//   }
}