import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Tuit } from './tuit.entity';
import { TuitsController } from './tuits.controller';
import { TuitsService } from './tuits.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tuit])],
    controllers: [TuitsController],
    providers: [TuitsService]
})
export class TuitsModule {}
