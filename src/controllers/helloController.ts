import {NextFunction, Request, Response} from "express";

export const getHello = (req: Request, res: Response, next: NextFunction) => {

    res.send({'hello': 1});
};