import User from '../models/User.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'
// import { compareCrypt, generateCrypt } from '../modules/bcrypt.js'
import { createToken } from '../modules/jwt.js'
// import {generateCrypt,compareCrypt} from "../modules/bcrypt.js"
import {generateCrypt} from "../modules/bcrypt.js"
import {compareCrypt} from "../modules/bcrypt.js"
export const register =async (req,res,)=>{
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({
                message: ' Username exists.',
            })
        }
        const newUser = new User({
            username,
            password: await generateCrypt(password),
        })

        const token = await createToken({id:newUser._id})
        await newUser.save()

        res.json({
            newUser,
            token,
            message: 'Registration is done.',
        })
    } catch (error) {
        res.json({ message: ` Something is wrong with Registration. ${error} ` })
        console.log(` ${error}`);
    }
}



// Login user
export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.json({
                message: 'The user does not exist.',
            })
        }

        const isPasswordCorrect =  compareCrypt(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Wrong password.',
            })
        }
        const token = createToken({id:user._id})

        res.json({
            token,
            user,
            message: 'You are logged in Successfully',
        })
    } catch (error) {
        res.json({ message:`'Something is wrong with login' ${error}`})
        console.log(` ${error}`);

      }
}




