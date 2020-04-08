import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from 'src/controllers/login-controlers';
import { LoginService } from 'src/services/login-servies';
import { env } from 'src/until/env-unit';
import { JwtStrategy } from 'src/guards/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: env.getEnvScience('NEST_SECRET'),
      signOptions: { expiresIn: '7d' },
    }),
    // PassportModule.register({
    //   defaultStrategy: 'jwt',
    // }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
  exports: [LoginService],
})
export class LoginModule {}
