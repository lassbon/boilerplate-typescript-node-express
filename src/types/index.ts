interface IConfig {
    node_env: string;
    port: string;
    cors_origin: string;
    JWT_SECRET: string;
  }


  interface IReponse {
    status: boolean;
    message: string;
    data?: any;
    error?: any;
  }

    export {
         IConfig,
         IReponse
    }