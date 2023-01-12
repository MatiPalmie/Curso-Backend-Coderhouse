import express from "express";
import handlebars from "express-handlebars";
import viewRouter from "./routes/view.routes.js";
import { Server} from "socket.io";
import __dirname from "./dirname.js";
const PORT = 8080;

const app = express();

const httpServer = app.listen(3000, () =>
  console.log(`Server Runing on Port ${PORT}`)
);
const io = new Server(httpServer);

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", viewRouter);

io.on("connection",(socket)=>{
    console.log("hola")
})