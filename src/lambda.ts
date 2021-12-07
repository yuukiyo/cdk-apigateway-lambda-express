import serverlessExpress from '@vendia/serverless-express'
import express, { Router, Request, Response } from 'express'

const app = express()
const router = Router()

router.get("/", (req: Request, res: Response) => {
  console.log(req)
  return res.json({ message: "hello! /" }).sendStatus(200)
})

router.get("/hello/:name", (req: Request, res: Response) => {
  return res.json({ message: `Hello! ${req.params.name}` }).sendStatus(200)
})

app.use("/", router)
exports.handler = serverlessExpress({ app })
