import { NextResponse } from "next/server";
import STATUS from "@/utils/status.code"
import useSendMail from "@/hooks/useSendMail";
import { log } from "console";


// Handles POST requests to /api/contacts
export function POST(request: Request) {
    const getBody = async () => {
        return await request.json()
    }
    const getMailStatus = async (body: any) => {
        const hookSenMail = useSendMail()
        return await hookSenMail.send(
            body.email,
            body.object,
            body.message,
            `${body.nom} ${body.prenom}`,
        )
    }
    try {
        return NextResponse.json({ success: true, status: STATUS.CREATED, result: null }, { status: STATUS.CREATED })
        // getBody().then(body => {
        //     getMailStatus(body).then(status => {
        //         console.log(">>>>>>>>>>>>>>>>>>", status)
        //         if (status === true) {
        //             return NextResponse.json({ success: true, status: STATUS.CREATED, result: null }, { status: STATUS.CREATED })
        //         }
        //         return NextResponse.json({ success: false, status: STATUS.BAD_REQUEST, result: null }, { status: STATUS.BAD_REQUEST })
        //     })
        // })
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ success: false, status: STATUS.BAD_REQUEST, result: error.message }, { status: STATUS.BAD_REQUEST })

    }

}

export async function GET(request: Request) {
    console.log(request)
    return NextResponse.json({ success: true, status: STATUS.CREATED, result: "success" }, { status: STATUS.CREATED })
}