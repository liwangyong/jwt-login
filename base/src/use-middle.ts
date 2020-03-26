import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import { env } from './until/env-unit';
const swaggerOptions = new DocumentBuilder()
    .setTitle('nestjs')
    .setDescription('The logger API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
class UseSalfState {
    constructor(app) {
        this.useMiddlie(app);
    }
    useMiddlie(app) {
        app.use(compression());
        app.use(helmet());
        const secret = env.getEnvScience('NEST_SECRET')
        // 注册session中间件
        app.use(expressSession({
            name: 'jiayi',
            secret,  // 用来对sessionid 相关的 cookie 进行签名
            saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
            resave: false,  // 是否每次都重新保存会话，建议false
        }));
        // 注册cookies中间件
        app.use(cookieParser(secret));
        // 防止跨站请求伪造
        app.use(csurf({ cookie: true }));
        app.use(
            rateLimit({
                windowMs: 15 * 60 * 1000, // 15 minutes
                max: 100, // limit each IP to 100 requests per windowMs
            }),
        );
        app.enableCors();
        const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
        SwaggerModule.setup('swagger', app, swaggerDoc);
    }
}
export default UseSalfState
