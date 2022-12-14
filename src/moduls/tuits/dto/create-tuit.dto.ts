import { IsString } from "class-validator";

export class CreateTuitDto {
    @IsString()
    readonly message:string;
}
