import {app} from "./app"
import { registerRouter } from "./routes/registerRouter"

app.use("/", registerRouter)