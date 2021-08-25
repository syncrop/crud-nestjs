import { Post, Get, Param, Res, Controller, UseInterceptors, UseGuards, UploadedFiles, HttpException, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiConsumes, ApiBadRequestResponse } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from '../files.service';
import { FileResponseVm } from '../schemas/file-response.schema'
import { json } from 'express';

@Controller('files')
export class FilesController {

    // @Post()
    // @UseInterceptors(
    //     FileInterceptor('image', {
    //         storage: diskStorage({
    //           destination: './files',
    //           filename: editFileName,
    //         })
    //       }),
    // )
    // async uploadedFile(@UploadedFile() file) {
    //     const response = {
    //         originalname: file.originalname,
    //         filename: file.filename,
    //     };
    //     return response;
    // }
    constructor(private filesService: FilesService){}

    @Post('')
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FilesInterceptor('file'))
    async upload(@Res() res, @UploadedFiles() files) {
        const newFile = await this.filesService.uploadFile(files);
        return res.status(HttpStatus.OK).json(newFile);
    }

    // @Get('info/:id')
    // async getFileInfo(@Param('id') id: string): Promise<FileResponseVm> {        
    //     const file = await this.filesService.findInfo(id)
    //     const filestream = await this.filesService.readStream(id)
    //     if(!filestream){
    //         throw new HttpException('An error occurred while retrieving file info', HttpStatus.EXPECTATION_FAILED)
    //     }
    //     return {
    //         message: 'File has been detected',
    //         file: file
    //     }
    // }

    // @Get(':id')
    // async getFile(@Param('id') id: string, @Res() res) {        
    //     const file = await this.filesService.findInfo(id)
    //     const filestream = await this.filesService.readStream(id)
    //     if(!filestream){
    //         throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
    //     }
    //     res.header('Content-Type', file.contentType);
    //     return filestream.pipe(res)
    // }

    // @Get('download/:id')
    // async downloadFile(@Param('id') id: string, @Res() res) {
    //     const file = await this.filesService.findInfo(id)        
    //     const filestream = await this.filesService.readStream(id)
    //     if(!filestream){
    //         throw new HttpException('An error occurred while retrieving file', HttpStatus.EXPECTATION_FAILED)
    //     } 
    //     res.header('Content-Type', file.contentType);
    //     res.header('Content-Disposition', 'attachment; filename=' + file.filename);
    //     return filestream.pipe(res) 
    // }

    // @Get('delete/:id')
    // @ApiCreatedResponse({ type: FileResponseVm })
    // async deleteFile(@Param('id') id: string): Promise<FileResponseVm> {
    //     const file = await this.filesService.findInfo(id)
    //     const filestream = await this.filesService.deleteFile(id)
    //     if(!filestream){
    //         throw new HttpException('An error occurred during file deletion', HttpStatus.EXPECTATION_FAILED)
    //     }        
    //     return {
    //         message: 'File has been deleted',
    //         file: file
    //     }
    // }
}
