import nodemailer from "nodemailer";
import { google } from "googleapis";
import { MailOptions } from "./mail-options";
import constants from "../constants/constants";
import templateContent from "./templates";
import MailType from "./mail-type";

async function sendEmail(
  options: MailOptions,
  callback: (err: Error | null, info: unknown) => void
): Promise<void> {
  if (!options.text && !options.html) {
    throw new Error("You must provide either text or htmlFileName");
  }

  // loading constants variables
  let clientID = constants.mailer.clientID;
  let clientSecret = constants.mailer.clientSecret;
  let redirectUri = constants.mailer.redirectUri;
  let refreshToken = constants.mailer.refreshToken;

  // Create an OAuth2 client
  const oAuth2Client = new google.auth.OAuth2(
    clientID,
    clientSecret,
    redirectUri
  );
  console.log(refreshToken);
  // Set the OAuth2 client credentials
  oAuth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  const email = constants.mailer.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: email,
      clientId: clientID,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: await oAuth2Client.getAccessToken(),
    },
  } as nodemailer.TransportOptions);

  let mailOptions: nodemailer.SendMailOptions = {
    from: email,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: !options.html
      ? undefined
      : await templateContent(options.html.mailType, options.html.mailData),
  };

  // Send the email
  transporter.sendMail(mailOptions, callback);
}

export default sendEmail;

export { MailType, MailOptions };
