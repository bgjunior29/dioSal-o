declare module "nodemailer";
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL?: string;
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
    SMTP_FROM?: string;
  }
}
