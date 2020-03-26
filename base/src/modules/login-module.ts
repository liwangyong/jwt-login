import { Module } from '@nestjs/common';
import { LoginController } from 'src/controllers/login-controlers';
import { LoginService } from 'src/services/login-servies';

@Module({
    imports: [],
    controllers: [LoginController],
    providers: [LoginService],
})
export class AppModule { }
