import { Router } from "express";
import { UserModel } from "../models/UserModel.js";
import { PublicationModel } from "../models/PublicationModel.js";

const allRouter = Router();

allRouter.get('/new', async (req, res) => {
    try {   
        
        const user = await UserModel.create({
            name: 'admin',
            email: 'admin@example.com'
        })

        
        const publication1 = await PublicationModel.create({
            title: 'Mi primer publicacion',
            content: 'Mi primer contenido',
            autor: user._id
        })

        const publication2 = await PublicationModel.create({
            title: 'Mi SEGUNDA publicacion',
            content: 'Mi SEGUNDA contenido',
            autor: user._id
        })

        user.publications.push(publication1)
        user.publications.push(publication2)

        await UserModel.findByIdAndUpdate(user._id, {
            publications:  { $push: publication1._id } // { $pull: publication1._id } para sacar
        }, {new: true})

        await user.save();

        res.status(201).json({
            message: 'creados correctamente',
            user
        })

    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
})


allRouter.get('/getUsers', async (req, res) => {
    try {
        
        const users = await UserModel.find().populate('publications', {
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        })

        res.status(200).json(users)


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
})

allRouter.get('/getPublications', async (req, res) => {
    try {
        
        const publications = await PublicationModel.find().populate('autor', {
            publications: 0,
            _id: 0,
            __v: 0
        })

        res.status(200).json(publications)


    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
})



export { allRouter }


