import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { GridFsStorage } from 'multer-gridfs-storage'
import { environment } from '../../environment';


@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {
    gridFsStorage: any;
    constructor() {
        this.gridFsStorage = new GridFsStorage({
            url: environment.mongodb,
            file: (req, file) => {
                return new Promise((resolve, reject) => {
                    const filename = file.originalname.trim();
                    const fileInfo = {
                      filename: filename
                    };
                    resolve(fileInfo);
                });
              }
        });
    }

    createMulterOptions(): MulterModuleOptions {
        console.log(this.gridFsStorage)
        return {
            storage: this.gridFsStorage,
        };
    }
}