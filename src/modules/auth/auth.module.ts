import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stratergy';

@Module({
  imports : [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret : process.env.JWT_SECRET_KEY,
      signOptions : { expiresIn : process.env.JWT_EXPIRY}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
