import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import userModel from "features/shared/db-models/user-models";



export  function createToken(user: userModel) {
    const userData = {
        _id: user._id,
        roles: user.roles
                   }
    const tokenAccess = jwt.sign(userData, process.env.ACCESS_SECRET, {expiresIn: process.env.ACCESS_LIFE} )
    const tokenRefresh = jwt.sign(userData, process.env.REFRESH_SECRET,{expiresIn: process.env.REFRESH_LIFE} )
    return {tokenAccess, tokenRefresh}
}

