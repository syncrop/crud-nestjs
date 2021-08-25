import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MascotasCrearDto } from './dto/mascotas-crear.dto';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
    constructor(private _mascotaService: MascotasService){}

    @Get()
    async findAll(@Res() res){
        const result = await this._mascotaService.findAll();
        if(result != null){
            res.status(HttpStatus.OK).send(result);
        }else{
            throw new HttpException('Productos no encontrados', HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async saveElement(@Res() res, @Body() mascotasCrearDto: MascotasCrearDto){
        const result = await this._mascotaService.saveElement(mascotasCrearDto);
        if(result != null){
            res.status(HttpStatus.CREATED).send(result);
        }else{
            throw new HttpException('Producto no creado', HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async findById(@Res() res, @Param('id') id: string){
        const result = await this._mascotaService.findById(id);
        if(result == null){
            throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
        }else{
            res.status(HttpStatus.OK).send(result);
        }
    }

    @Patch(':id')
    async edit(@Res() res, @Param('id') id: string, @Body() mascotasCrearDto: MascotasCrearDto){
        const result = await this._mascotaService.edit(id, mascotasCrearDto);
        if(result != null){
            res.status(HttpStatus.OK).send(result);
        }else{
            throw new HttpException('Producto no creado', HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async remove(@Res() res, @Param('id') id: string){
        const result = await this._mascotaService.remove(id);
        if(result != null){
            res.status(HttpStatus.OK).send(result);
        }else{
            throw new HttpException('Producto no creado', HttpStatus.BAD_REQUEST);
        }
    }
}
