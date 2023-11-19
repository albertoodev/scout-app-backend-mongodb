import MailType from "./mail-type";

export interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: {
    mailType: MailType;
    mailData?: any;
  };
}
