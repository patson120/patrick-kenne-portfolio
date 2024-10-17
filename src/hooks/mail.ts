import CONSTANTS from '@/utils/constants'
import nodemailer from 'nodemailer'


    const send = async (from: string, subject: string, message: string, username: string) => {
        console.log(CONSTANTS.EMAIL_USERNAME);
        try {
            await transporter.sendMail({
                to: 'patrickkennenl@gmail.com', // CONSTANTS.EMAIL_USERNAME,
                subject: subject,
                text: message,
                html: `
                    <html lang='en'>
                        <body>
                            <main>
                                <h1 style="font-weight: bold">Portfolio</h1> <br/>
                                <p style="font-weight: bold">Mr./Mme ${username} vous a laissé les message ci-dessous.</p>
                                <p>${message} </p><br/>
                                <p>Sender email: ${from}</p>
                            </main>
                        </body>
                    </html>
                `
            })
            return await sendReponse(`${CONSTANTS.EMAIL_USERNAME}`, from, "Accusé de réception", message, username)
        } catch (error) { 
            console.log(error)                      
            return false
        }
    }

    const sendReponse = async (from: string, to: string, subject: string, message: string, username: string) => {
        try {
            await transporter.sendMail({
                from: from,
                to: to,
                subject: subject,
                text: message,
                html: `
                    <html lang='en'>
                        <body>
                            <main>
                                <h1 style="font-weight: bold">Mr./Mme ${username},</h1> <br/>
                                <p>Nous accusons réception de votre message!</p>
                                <p>Nous vous reviendrons bientôt pour plus d'informations. <br/> Merci de votre confiance !</p>
                            </main>
                        </body>
                    </html>
                `
            })
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }



export default {
    send,
    sendReponse
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: CONSTANTS.EMAIL_USERNAME,
        pass: CONSTANTS.EMAIL_PASSWORD
    }
})