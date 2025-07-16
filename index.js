const express = require ('express');
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get("/ticket", (req, res) => {
    res.render('ticket', {

    })

    res.render('index.ejs');

});