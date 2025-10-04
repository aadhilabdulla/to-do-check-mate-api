import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/database/models/User.model';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel : Model<UserDocument>,
    private jwtService : JwtService
  ){}

  async createUser(signupDto : SignupDto){
    try {
      const { email, password } = signupDto;
      if(!email){
        throw new HttpException(
          {
            "success" : false,
            "message" : "Please enter Email"
          },
          HttpStatus.NOT_FOUND
        )
      }

      if(password.length < 8){
        throw new HttpException(
          {
            "success" : false,
            "message" : "Password should be atleast 8 characters"
          },
          HttpStatus.UNAUTHORIZED
        )
      }
      const existingUser = await this.userModel.findOne({email : email});
      if(existingUser){
        throw new HttpException(
          {
            "success" : false,
            "message" : "User already exists. Please login"
          },
          HttpStatus.CONFLICT
        )
      }
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password,salt);
      const user = new this.userModel({ email : email, password : encryptedPassword});
      await user.save();
      return {
        "success" : true,
        "message" : "Signup successful"
      }

    } catch (error) {
      throw error
    }
  }

  async loginUser(loginDto : LoginDto) {
    try {
      const { email, password } = loginDto;

      if(!email){
        throw new HttpException(
          {
            "success" : false,
            "message" : "Please enter Email"
          },
          HttpStatus.NOT_FOUND
        )
      }

      if(!password) {
        throw new HttpException(
          {
            "success" : false,
            "message" : "Please enter Password"
          },
          HttpStatus.NOT_FOUND
        )
      }

      const user = await this.userModel.findOne({email : email});
      if(!user){
        throw new HttpException (
          {
            "success" : false,
            "message" : "Please create new account"
          },
          HttpStatus.BAD_REQUEST
        )
      }
      const hashedPassword = user.password;
      const isLoginAuthorized = await bcrypt.compare(password , hashedPassword)

      if(isLoginAuthorized) {
        const payload = { sub : user._id , email : user.email }
        const access_token = this.jwtService.sign(payload)
        return {
          "success" : true,
          "message" : "Login successful",
          access_token
        }
      }
      return {
        "success" : false,
        "message" : "Wrong email or password"
      }


    } catch (error) {
      throw error
    }
  }
}
