const express = require("express");

const app = new express();


const todos = [{
    text: "第一件事"
}]

app.get("/alldata", (req, res) => {
    setTimeout(() => {

        res.header("Access-Control-Allow-Origin", "*")

        res.send(JSON.stringify(todos))
        res.end();
    }, 1000);
})

app.listen(8080, () => {
    console.log("已启动")
})