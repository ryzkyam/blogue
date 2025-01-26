
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateCookie from "../providers/auth.js";
import bodyParser from "body-parser";

export async function login(req, res) {

     try {
          const {name,email,  password, } = req.body;
          if(name < 6){
               return res
               .status(400)
               ,json({error: "password minimal 6 charakter"});
          }
     } catch (error) {
        console.log(error);
        res.status(500).json({})
     }
}
