const express = require("express");

const app = express();

app.use(express.static("public"));

// Build the server here
app.get("/", (request, response) =>
  response.sendFile(__dirname + "/index.html")
);

app.get("/asia", (req, res) => 
    res.sendFile(__dirname + "/asia.html")
);

app.get("/europe", (req, res) => 
    res.sendFile(__dirname + "/europe.html")
);


app.get("/states", (req, res) => {
    res.sendFile(__dirname + "/states.html")

})

const PORT = 3000;
app.listen(PORT, () => console.log('running on port 3000'));

