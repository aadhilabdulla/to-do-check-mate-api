import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/database/models/User.model';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel : Model<UserDocument>
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
      const user = new this.userModel({ email : email, password : password});
      await user.save();
      return {
        "success" : true,
        "message" : "Signup successful"
      }

    } catch (error) {
      throw error
    }
  }
}
