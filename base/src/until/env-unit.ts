import * as dotenv from 'dotenv';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

@Injectable()
export class EnvUntils {
    getEnvScience(key: string) {
        const value: string | undefined = process.env[key];
        return value
    }
}
export const env = new EnvUntils();
