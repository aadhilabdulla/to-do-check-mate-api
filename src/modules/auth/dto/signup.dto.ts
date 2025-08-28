import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsStrongPassword } from "class-validator";

export class SignupDto{

    @ApiProperty({ default : 'aadhil242@gmail.com'})
    @IsEmail()
    email : String;

    @ApiProperty({ default : 'password'})
    @IsStrongPassword()
    password : String;
}