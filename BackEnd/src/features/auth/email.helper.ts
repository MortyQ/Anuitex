import * as nodemailer from "nodemailer";
import userModel from '../shared/db-models/user-models';


const mailTransportert = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    service: "gmail",
    auth: {
        user: 'morgenshtern1988@gmail.com',
        pass: '25012005'
    }
})

export const sendingEmail = (user: userModel): any => {
    let mailOptions = {
        from: 'yasenev1998@gmail.com',
        to: user.email,
        subject: "// Subject line",
        text: `Confirm registration by clicking on the link: http://localhost:3000/confirmedEmail?user=${user.id}`
    };
    mailTransportert.sendMail(mailOptions, (error, info) => {
        if (error) {
            return error
        }
        return true;
    })
};