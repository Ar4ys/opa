import { Router } from 'express'
import catchAsync from '../middlewares/asyncErrorHandler.js'

const router = Router()

router.route('/')
  .get(catchAsync(async (req, res) => {
    res.status(200).send('Hello world')
  }))


export default router
