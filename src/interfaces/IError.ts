import HttpStatusCode from "../enums/HttpStatusCode";

export  default interface IError {
    message: string;
    status: HttpStatusCode,
    error?: {message: string} | string;
}