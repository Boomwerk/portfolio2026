import nodemailer from 'nodemailer';
import {ratelimit} from '@/lib/ratelimit';

export const runtime = "nodejs";


export async function POST(req){
    
    if(process.env.SMTP_HOST !== "127.0.0.1"){

        // rateLimit 
        const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
        const {success} = await ratelimit.ratelimit(ip);
    
        if(!success){
            return Response.json(
                { error: "Trop de requêtes, réessaie plus tard."},
                {status : 429}
            );
        }
    }else{
        console.log("[DevMode] RateLimit disabled");
    }


    // Mail
    try{

        const { subject, email, message } = await req.json();

        if(!subject || subject.length <3 || subject.length > 30 ){
            return Response.json(
                {success: false, error: "Sujet invalide (3 à 30 caractères)"},
                {status: 400}
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email || !emailRegex.test(email) ){

            return Response.json(
                {success: false, error: "Email invalide"},
                {status: 400}
            );
        }

        if (!message || message.length < 3 || message.length > 500) {
            return Response.json(
                { error: "Message invalide" },
                { status: 400 }
            );
        }   

        let mailer;

        if(process.env.SMTP_HOST !== "127.0.0.1"){

           // Prod 
            mailer = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure:false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: precess.env.SMTP_PASS
                }
            });

          
        }else{

             // dev 
            mailer = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                secure:false,
            });

           
        }

        await mailer.sendMail({
            from: `"Site Perso:" <${email}>`,
            to: process.env.SMTP_EMAIL,
            subject: subject,
            text: message
        });


        return Response.json({
            success: true
        });

        


    }catch(error){
        console.error(error);

        return Response.json(
            {success: false, error: "Erreur serveur"},
            {status:500}
        )
    }

   
}