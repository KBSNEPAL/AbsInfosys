const express = require("express");
const app = express();
const port = process.env.PORT || 4000
require("./db/conn")
const hbs = require("hbs");
const path = require("path");
const dirpath = path.join(__dirname, "../public")
const viewpath = path.join(__dirname, "./templates/views");
const partialpath = path.join(__dirname, "./templates/partials")
console.log(dirpath);

const signupschema = require("./api");
console.log(signupschema);

app.use(express.urlencoded({ extended: false }));


app.use(express.static(dirpath));
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialpath);


app.get("/", (req, res) => {
    res.render("index");
})
app.get("/product", (req, res) => {
    res.render("product");
})

app.get("/login", (req, res) => {
    res.render("Login");
})

app.get("/Signup", (req, res) => {
    res.render("Signup");
})

app.post("/register", async (req, res) => {
    try {

        const password = req.body.password;
        const conpassword = req.body.con_password;

        if(password === conpassword){
            const sdata = signupschema({
                email:req.body.email,
                u_name:req.body.u_name,
                password:req.body.password,
                con_password:req.body.con_password
            })

            const savedata = await sdata.save();
            res.status(200).render("Login");
        
        }else{
            res.send("Password is not matching");
        }
    } catch (error) {
        res.status(400).send("server is down.");
    }
})


// Login password matching with Database

app.post("/login",async(req,res)=>{

    try {
        
        const email = req.body.email;
        const password = req.body.password;
        const logindata = await signupschema.findOne({email:email});
        console.log(logindata);
        if(logindata.password === password){
            
            res.status(200).render("index");
        }else{
            res.status(400).send("Invalid login details");
        }

    } catch (error) {
        res.status(400).send("Invalid login details");
    }

     
})


app.listen(port, () => {
    console.log(`Server is running at port no:${port}`)
})