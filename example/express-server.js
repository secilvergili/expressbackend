const express = required("express");
const cors = require("cors");

// bir API oluştur:

const app = express();

// middleware (cors hataları çözmek için doğru headerlar gönderir.)

app.use(cors());

//  "/" adresine gelen isteklere cevap ver
app.get("/", (req, res) => {
    res.json( {message: "express Server Merhabalar!"});
});
 // "/new" adresine gelen isteklere cevap ver
 
 app.post("/new", (req, res) => {
    res.status(201).json({ mesaage: "server: Merhabalar!"});
 });

 // hangi port tan gelen istekler dinlenecek

 const port = 3002;

 app.listen(port, () => {
    console.log(`Server ${port} potuna gelen istekleri dinliyor.`);
 });

 
