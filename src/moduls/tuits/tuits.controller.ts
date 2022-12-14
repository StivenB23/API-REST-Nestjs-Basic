import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

    constructor(private readonly tuitService: TuitsService){ };

    @Get()
    getTuits(@Query() filterQuery): Promise<Tuit[]>{
        const {searchTerm, orderBy}=filterQuery;
        return this.tuitService.getTuits();
    }

    @Get(':id')
    getTuit(@Param('id') id:number): Promise<Tuit> {
        return this.tuitService.getTuit(id);
    }

    @Post()
    createTuit(@Body() message: CreateTuitDto): Promise<Tuit>{
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(@Param('id') id:number, @Body() tuit: UpdateTuitDto): Promise<Tuit>{
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    deleteTuit(@Param('id') id:number): Promise<void>{
        return this.tuitService.removeTuit(id);
    }
}
