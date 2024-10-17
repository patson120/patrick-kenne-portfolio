import MAIL from "@/hooks/mail";
import STATUS from "@/utils/status.code";
import { NextResponse } from "next/server";


// Handles POST requests to /api/contacts
export function POST(request: Request) {
    const getMailStatus = async (body: {[key:string]: string}) => {
        return await MAIL.send(
            body.email,
            body.object,
            body.message,
            `${body.nom} ${body.prenom}`,
        )
    }
    const getReponse = async () => {
        const body = await request.json()
        const status = await getMailStatus(body)
        return NextResponse.json(
            {
                success: status,
                status: status ? STATUS.OK : STATUS.BAD_REQUEST,
                result: status ? body : null
            },
            { status: status ? STATUS.OK : STATUS.BAD_REQUEST }
        )
    }
    return getReponse().then(response => response)
}
