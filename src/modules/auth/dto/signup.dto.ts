import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class SignupDto{

    @ApiProperty({ default : 'aadhil242@gmail.com'})
    @IsEmail()
    email : string;

    @ApiProperty({ default : 'password'})
    @IsStrongPassword()
    password : string;
}