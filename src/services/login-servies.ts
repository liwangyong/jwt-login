import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Register } from 'src/dto/services/login-dto';
import { UserExtService } from './entities/user-entity';
import { ResultSend } from 'src/dto/result-dto';
import { UserExtEntity } from 'src/entities/user-entity';
import { JwtService } from '@nestjs/jwt';
import { PhoneEntity } from 'src/entities/phone-entity';
import { RelaUserExtService } from './entities/rela-user-entity';
@Injectable()
export class LoginService {
  constructor(
    private readonly userExtService: UserExtService,
    private readonly relaUserExtService: RelaUserExtService,
    private jwtService: JwtService,
  ) {}
  // 登录
  async login({ userName, password }): Promise<ResultSend<UserExtEntity>> {
    const data = await this.userExtService.find({
      select: [
        'userName',
        'phone',
        'password',
        'id',
        'hdImg',
        'bgImg',
        'description',
      ],
      where: Object.assign({ deleted: false, userName }),
    });
    if (data) {
      // relaUserExtService
    //   const x = new PhoneEntity();
    //   x.userId = data.id;
    //   await this.relaUserExtService.SingOneInsert(x);
    //   const a = new UserExtEntity();
    //   a.frList = [x];
    //   this.userExtService.SingOneInsert(a);
    //   const users = await this.userExtService.find({
    //     where: Object.assign({ deleted: false, userName }),
    //     relations: ['frList'],
    //   });
    //   console.log(users);
      if (data.password === password) {
        return {
          code: 200,
          content: Object.assign(data, {
            access_token: this.jwtService.sign({ id: data.id }),
          }),
          message: '',
          success: true,
        };
      }
    }
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: '账号或密码错误',
      },
      HttpStatus.BAD_REQUEST,
    );
  }
  // 注册
  async newlyAdd(res: Register): Promise<ResultSend<UserExtEntity>> {
    const data = await this.userExtService.find({
      where: { userName: res.userName },
    });
    if (data) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: '已有该账号，请重新申请',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      const info = await this.userExtService.SingOneInsert(res);
      return { code: 200, content: info, message: '申请成功', success: true };
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: '申请失败，请重新申请',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
