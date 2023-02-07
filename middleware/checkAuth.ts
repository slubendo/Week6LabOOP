import {Request, Response} from "express"
import express from "express";


/*
FIX ME (types) 😭 
*/
export const ensureAuthenticated = (req: Request, res: Response, next: express.NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
}

/*
FIX ME (types) 😭
*/
export const forwardAuthenticated = (req: Request, res: Response, next: express.NextFunction) => {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
}