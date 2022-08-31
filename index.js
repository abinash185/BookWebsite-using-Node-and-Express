const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

//console.log(path.join(__dirname , "../BookWebsite/src"));

const staticPath = path.join(__dirname , "../BookWebsite/src");

app.use(express.static(staticPath));

app.get("/" , (req,res)=>{

    res.send("Hello server");
});


app.listen(port , ()=>{
    console.log(`listening to the ${port}`);
});