import * as dotenv from 'dotenv';
import path from 'path';
import  {IConfig}  from '../types/index';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});



const config:IConfig = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  JWT_SECRET: process.env.JWT_SECRET
};

export default config;
