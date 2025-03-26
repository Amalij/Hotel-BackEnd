import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../../domain/errors/forbidden-error";
 
interface AuthenticatedRequest extends Request {
  auth?: {
    sessionClaims?: {
      role?: string;
    };
  };
}

export const isAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
 
  if (req?.auth?.sessionClaims?.role !== "admin") {
    throw new ForbiddenError("Forbidden");
  }
  
 
  next();
};
