import mongoose from "mongoose";
import User from "../../models/UserModel.js";
import jwt from "jsonwebtoken"

const login = async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(404).send({
            status: false,
            message: "Please fill the required info and try again !"
        })
    };
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
        return res.status(400).send({
            message: "User not registered",
            status: false
        });
    }
    const isMatch=await existingUser.isPasswordCorrect(password)
    if(!isMatch){
    return res.status(400).send({
        message: "Please input correct eamil and password",
        status: false
    })}
    const JWT_SECRETE = process.env.JWT_SECRETE;
    const token=jwt.sign(
        {id:existingUser._id},
        JWT_SECRETE,
        {expiresIn:"2d"}
    )

    return res.status(200).send({
        message: "Logged in successfully!!",
        status: true,
        token
    })
}

const Register = async(req, res) => {
    const { name, password, email, mobile } = req.body
    if (!name || !password || !email || !mobile) {
        return res.status(400).send({
            message: "Please input all fields!",
            status: false
        })
    }
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        return res.status(400).send({
            message: "User already exists ",
            status: false
        })}
        const user = new User(
            {
                name,
                password,
                email,
                mobile
            }
        )
        await user.save();
        return res.status(201).json({
      message: "User registered successfully",
      status: true,
    });

    }


export { Register, login }