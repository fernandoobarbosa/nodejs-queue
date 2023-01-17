import nodemailer from "nodemailer";
import mailConfig from "../../config/mail";

console.log("Mail configuration", mailConfig);

export default nodemailer.createTransport(mailConfig);
