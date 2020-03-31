import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';
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
    // app.use(csurf({ cookie: true }));
    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      }),
    );
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('swagger', app, swaggerDoc);
  }
}
export default UseSalfState;
