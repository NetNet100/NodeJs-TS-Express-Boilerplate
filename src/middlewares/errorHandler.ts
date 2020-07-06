import * as express from 'express';
import IError from "../interfaces/IError";

const errorHandler = (err: IError, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    const message = `Something went wrong: ${err.message} the error is: ${typeof err.error === 'object' ? JSON.stringify(err.error.message): err.error}`;
    res.status(err.status || 500).json(message);
};

export default errorHandler;