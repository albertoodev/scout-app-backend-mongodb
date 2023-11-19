import { promises as fs } from "fs";

function replacePlaceholders(template: string, data: any): string {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || "");
}

async function getTemplateContent(
  templateFileName: string,
  emailData: any
): Promise<string> {
  const emailTemplate = await fs.readFile(
    `./utils/mailer/templates/${templateFileName}.html`,
    "utf8"
  );
  return replacePlaceholders(emailTemplate, emailData);
}

export default getTemplateContent;
