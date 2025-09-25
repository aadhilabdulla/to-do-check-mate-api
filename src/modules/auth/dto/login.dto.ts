import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class LoginDto {
    @ApiProperty({ default : 'aadhil242@gmail.com' })
    @IsEmail()
    email : string;

    @ApiProperty({ default : 'Password'})
    password : string;

}