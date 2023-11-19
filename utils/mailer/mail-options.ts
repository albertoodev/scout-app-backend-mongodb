import MailType from "./mail-type";

export interface MailOptions {
    to: string;
    subject: string;
    text?: string;
    mailType?: MailType;
    mailData?: any;
  }