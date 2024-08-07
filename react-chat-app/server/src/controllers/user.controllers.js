import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User(req.body);
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}


export const getUsers = async (req, res) => {

    try {
        const user = await User.find({ active: true })
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

export const getUserById = async (req, res) => {


}
export const updateUser = async (req, res) => {
    const { id } = req.params

    try {
        const userUpdated = await User.findByIdAndUpdate(id, req.body);
        return res.json(userUpdated);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }


}

export const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        await User.findByIdAndDelete(id);
        return res.json({ message: "User deleted" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }

}
