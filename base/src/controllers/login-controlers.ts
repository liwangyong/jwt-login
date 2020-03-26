import { Controller, Post, Inject } from '@nestjs/common';
import { LoginService } from 'src/services/login-servies';

@Controller('login')
export class LoginController {
    constructor(@Inject() loginService: LoginService) { }
}
