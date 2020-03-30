import { Controller, Post, Body, UsePipes, Get } from '@nestjs/common';
import { LoginService } from 'src/services/login-servies';
import { Register, User } from 'src/dto/services/login-dto';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { ResultSend } from 'src/dto/result-dto';
import { JournalValidationPipe } from 'src/guards/pipe';
@Controller('/api')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('/regis')
  @ApiOperation({ summary: '注册' })
  @ApiOkResponse({ description: '注册新的账号', type: ResultSend })
  @UsePipes(new JournalValidationPipe())
  register(@Body() res: Register) {
    return this.loginService.newlyAdd(res);
  }
  @Post('/login')
  @ApiOperation({ summary: '登录' })
  @ApiOkResponse({ description: '登录成功', type: ResultSend })
  @UsePipes(new JournalValidationPipe())
  login(@Body() res: User) {
    return this.loginService.login(res);
  }
  @Get('/set')
  setLink() {
    return { code: 200, content: 'xxx' };
  }
}
