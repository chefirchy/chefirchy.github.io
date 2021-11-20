const express = require('express');
const app = express();
const jsonParser = express.json()
const fs = require('fs');


app.use(express.static(__dirname + '/public' ))

const filePath = 'users.json'

app.post('/api/users', jsonParser, (req,res)=>{
    const username = req.body.username 
    const password = req.body.password 
    const content = fs.readFileSync(filePath,"utf8")
    let user = {
        username,
        password,
    }
    const users = JSON.parse(content)
    // for(user in users) {
    //     if(users[user].username === user.username ) {
    //          foundUser = users[user]
    //          break;
    //     }
    // }
    user['id'] = users.length + 1
    users.push(user) 
    data = JSON.stringify(users)
    fs.writeFileSync('users.json',data)
    res.status(200).send()
})



   
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});