import { IsEnum, IsNotEmpty, IsUrl, Length } from "class-validator";
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'> { }

export class CreateCategoryDto implements ICreateCategoryDto {
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;
    
    @IsNotEmpty()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async () => {
    const dto = new CreateCategoryDto()
    dto.name = 'a'

}) ()
