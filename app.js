const dotenv = require("dotenv")
const express = require("express")
const exphbs = require("express-handlebars")
const connectDB = require("./config/db")
const connectMongoDB = require("./config/db")
const morgan = require("morgan")
const app = express()

// Load config
dotenv.config({path: "./config/config.env"})

connectMongoDB()

// Logging
if (process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
} 
// Handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: ".hbs"})); 

  
// Routes

app.use("/", require("./routes/index"))


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}.`))