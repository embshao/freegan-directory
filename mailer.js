const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'freeganforagers@gmail.com',
        pass: 'freegan@11',
    },
});
const mailOptions = {
    from: 'freeganforagers@gmail.com',
    to: 'freeganforagers@gmail.com',
    subject: 'hello world!',
    html: 'hello world!',
};
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
});