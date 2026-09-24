import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function auth(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message: "Authorization token missing"
        });
    }

    const parts = authHeader.split(" ");

    const token = parts[1];

    
    try {
      const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!  
      );
      
    if (typeof decoded === "string" || typeof decoded.userId !== "number") {
        return res.status(401).json({
            message: "Invalid token"
    });
}

    res.locals.userId = decoded.userId;

    next();
    
} catch {
    return res.status(401).json({
        message: "Invalid or expired token"
    });
}
}