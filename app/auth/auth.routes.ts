import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../routes/routes.types";
import authServices from "./auth.services";
import { ResponseHandler } from "../utils/response.handler";
import { LoginValidations,SignUpValidations } from "./auth.validations";
const router = Router();


router.get("/user/:name", ...LoginValidations, async (req, res, next) => {
    try {
        const result = await authServices.find({username:req.params.name})
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.post("/login", ...LoginValidations, async (req, res, next) => {
    try {
        const result = await authServices.login(req.body)
        console.log("object : ",result)
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

router.post("/register", ...SignUpValidations, async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authServices.register(req.body)
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});

export default new Route("/auth", router);







