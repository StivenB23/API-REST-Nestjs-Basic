import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
   
    constructor(@InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>){}

    async getTuits(): Promise<Tuit[]>{
        return await this.tuitRepository.find();
    }

    async getTuit(id:number): Promise<Tuit>{
        const tuit = await this.tuitRepository.findOneBy({id})
        if (!tuit) {
            throw new NotFoundException("Resource Not Found");
        }
        return tuit;
    }

    async createTuit({message}: CreateTuitDto){
      const tuit: Tuit = await this.tuitRepository.create({ message });
      return this.tuitRepository.save(tuit);
        
    };

    async updateTuit(id:number, {message}:UpdateTuitDto){
        const tuit:Tuit = await this.tuitRepository.preload({id: id, message: message})
        if (!tuit) {
            throw new NotFoundException("Resource not found");
        }
        return tuit;
    }

    async removeTuit(id:number): Promise<void>{
        const tuit: Tuit = await this.tuitRepository.findOneBy({id});
        if (!tuit) {
            throw new NotFoundException("Resource not found");
        }
        this.tuitRepository.remove(tuit);
    }
}
