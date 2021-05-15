import { User } from '../models/User.js'
import asyncCatch from './asyncErrorHandler.js'
import type {} from './auth.js'

export const isUserExists = () =>
  asyncCatch(async (req, res, next) => {
    const googleId = req.user!.sub
    const isUserExists = await User.getByGoogleId(googleId)
    if (!isUserExists)
      return void res.status(401).send('User with such googleId not found')
    next()
  })
