import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;
    @IsString()
    @IsOptional()
    name: string;
    @IsString()
    @IsOptional()
    description: string;
    @IsNumber()
    @IsOptional()
    price: number;
    @IsNumber()
    @IsOptional()
    stock: number;
    @IsString()
    @IsOptional()
    image: string;
}