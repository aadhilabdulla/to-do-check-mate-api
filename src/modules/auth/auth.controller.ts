import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async newUser(@Body() signupDto : SignupDto){
    return await this.authService.createUser(signupDto)
  }

  @Post('login')
  async loginUser(@Body() loginDto : LoginDto){
    return await this.authService.loginUser(loginDto)
  }
}
