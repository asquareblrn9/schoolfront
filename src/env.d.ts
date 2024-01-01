declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HOST: string;
            NODE_ENV: 'development' | 'production';
            REACT_APP_BACKEND:string
        }
    }
}

export {};
