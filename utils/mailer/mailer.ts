import nodemailer from "nodemailer";
import { google } from "googleapis";
import { MailOptions } from "./mail-options";
import env from "../env/env";

export async function sendEmail(options: MailOptions): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    if (!options.text && !options.mailType) {
      throw new Error("You must provide either text or htmlFileName");
    }
    

    // loading env variables
    let clientID = env.mailer.clientID;
    let clientSecret = env.mailer.clientSecret;
    let redirectUri = env.mailer.redirectUri;
    let refreshToken = env.mailer.refreshToken;

    // Create an OAuth2 client
    const oAuth2Client = new google.auth.OAuth2(
      clientID,
      clientSecret,
      redirectUri
    );

    // Set the OAuth2 client credentials
    oAuth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    const email = env.mailer.email;

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

    const mailOptions = {
      from: email,
      ...options, // Include the provided options
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        resolve(false); // Resolve the promise with false if there's an error
      } else {
        console.log("Email sent successfully", info);
        resolve(true); // Resolve the promise with true if the email is sent successfully
      }
    });
  });
}