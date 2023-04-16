import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {

    const users = await User.find({});
    console.log(req.query);
    res.json({
        success: true,
        users
    })


}
export const register =  async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })

    res.json({
        success: true,
        message: "Registered successfully"
    })
}

export const specialFunc = async(req, res) => {
   res.json({
    success: true,
    message: "just Joking",
   })
}

export const dynamicFunc = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        success: true,
        user
    })
}
