import CONSTANTS from '@/utils/constants'
import nodemailer from 'nodemailer'

const useSendMail = () => {
    const send = async (from: string, subject: string, message: string, username: string) => {
        
        try {
            await transporter.sendMail({
                from: from,
                to: 'patrick1kenne@gmail.com', // CONSTANTS.EMAIL_USERNAME,
                subject: subject,
                text: message,
                html: `
                    <html lang='en'>
                        <body>
                            <main>
                                <h1 style="font-weight: bold">Behati</h1> <br/>
                                <p style="font-weight: bold">Mr./Mme ${username} text to you.</p>
                                <p>${message} </p>
                            </main>
                        </body>
                    </html>
                `
            })
            return true  // await sendReponse(`${CONSTANTS.EMAIL_USERNAME}`, from, "Accusé de réception", message, username)
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
                                <h1 style="font-weight: bold">Patrick KENNE,</h1> <br/>
                                <p style="font-weight: bold">Mr./Mme ${username}, </p>
                                <p>Nous accusons réception de votre message!</p>
                                <p>Nous vous reviendrons bientôt pour plus d'informations. <br/> Merci de votre confiance !</p>
                            </main>
                        </body>
                    </html>
                `
            })
            return true
        } catch (error) {
            console.log(2, error);
            return false
        }
    }

    return { send }
}

export default useSendMail

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: CONSTANTS.EMAIL_USERNAME,
        pass: CONSTANTS.EMAIL_PASSWORD
    }
})