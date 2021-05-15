import { Router } from 'express'
import ExampleRouter from './example.js'

const router = Router()

router.get('/', (_req, res) => {
  res.render('index')
})

router.use(ExampleRouter)

export default router
