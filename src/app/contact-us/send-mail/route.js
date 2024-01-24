import SendMail from "../../../hooks/useMail"
export async function POST(request) {    
    const {from,to,subject,text,html} = await request.json()    
    const response = {
        error:false,
        data:null,
        message:null
    }
    if (from && to && subject && (html || text)) {
        const info = await SendMail(from,to,subject,text,html)   
        response.data = info
    }else{
        response.error = true
        response.message = 'Please provide all the parameters'
    }
    return Response.json(response)
}