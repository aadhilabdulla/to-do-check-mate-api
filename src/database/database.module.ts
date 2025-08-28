import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/User.model";

@Module({
    imports : [
        ConfigModule.forRoot({isGlobal : true}),
        MongooseModule.forRootAsync({
            imports : [ConfigModule],
            inject : [ConfigService],
            useFactory : (configService : ConfigService) => ({
                uri : configService.get<string>('MONGO_URI'),
            })
        }),

        MongooseModule.forFeature([
            { 
                name : User.name ,
                schema : UserSchema
            }
        ])
    ],
    exports : [MongooseModule]
})
export class DatabaseModule {}