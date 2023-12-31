import { TErrorSources, TGenericErrorResponse } from "../interface/error";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err: any) : TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/) ;

    const extractMessage = match && match[1];

    const errorSources: TErrorSources = [
        {
            path: '',
            message : `${extractMessage} is already exist` 
        }
    ]
    const statusCode = 400

    return {
        statusCode ,
        message : 'invalid' ,
        errorSources
    }
}

export default handleDuplicateError ;