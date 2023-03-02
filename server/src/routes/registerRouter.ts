import express from 'express'
import { RegisterController } from '../controller/RegisterController'

export const registerRouter = express.Router()

const registerController = new RegisterController()

registerRouter.post("/register", registerController.register)

// registerRouter.get("/", registerController.allregister)