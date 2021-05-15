import { Model } from 'sequelize';
import { Router } from 'express'
import validate from '../middlewares/validate.js'
import asyncCatch from '../middlewares/asyncErrorHandler.js'
import { googleTokenBodyValidator } from '../validation/user.js'
import { User } from '../models/User.js'
import { GoogleTokenBody, parseGoogleToken } from '../middlewares/parseGoogleToken.js'

const router = Router()

router.post('/user/login',
  validate(googleTokenBodyValidator()),
  parseGoogleToken(),
  asyncCatch<GoogleTokenBody>(async (req, res) => {
    const googleId = req.body.googleId as string
    const user = await User.getByGoogleId(googleId)
    if (user)
      res.status(200).send(user)
    else
      res.sendStatus(404)
  }))

router.post('/user/register',
  validate(googleTokenBodyValidator()),
  parseGoogleToken(),
  asyncCatch<GoogleTokenBody>(async (req, res) => {
    const googleId = req.body.googleId as string
    const user = await User.getByGoogleId(googleId)
    if (user)
      res.status(400).send('This googleId is already taken')
    else {
      const newUser = await User.create({ googleId })
      res.status(200).send(newUser)
    }
  }))

export default router
