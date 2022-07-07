import express from 'express'
const app = express()
import { router } from "./routes/weatherRoute.js";


app.use(express.json())



app.use('/weather' ,router)

const port =5000

app.listen(port, () => {
    console.log(`server connected at ${port}`);
  });