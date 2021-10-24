import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import pdf from "html-pdf";
import path from "path";
import pdfTemplate from "./documents/index.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const __dirname = path.resolve(path.dirname(''));

mongoose.connect('mongodb://localhost:27017/MakeMyResume', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Db connected");
});

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.post('/login', (request, response) => {
    const {email, password} = request.body;
    User.findOne({email: email}, (error, user) =>{
        if(user){
            if(password === user.password)
                response.send({message: "Login Successful", user: user});
            else
            response.send({message: "Invalid password"});
        }
        else{
            response.send({message: "User is not Registered"});
        }
    });
});

app.post('/register', (request, response) => {
    console.log(request.body);
    const {firstName, lastName, email, password, confirmPassword} = request.body;
    User.findOne({email: email}, (error, user) =>{
        if(user){
            alert("User is already Registered");
        }
        else{
            console.log(firstName, " ", lastName, " ", email, " ", password, " ", confirmPassword);
            const user = new User({
                firstName, lastName, email, password
            });
            console.log(user.firstName, " ", user.lastName, " ", user.email, " ", user.password);
            user.save( error => {
                if(error){
                    response.send(error);
                }
                else{
                    response.send( { message: "Successfully Registered, Please login now." })
                }
            });
        }
    });
});

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});


// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('make_my_resume/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'make_my_resume', 'build', 'index.html'));
    });
}

app.listen(8080, () => {
    console.log("server started at port 8080");
})