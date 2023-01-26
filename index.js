import express from "express"
import request from "request"
import { dbConnection } from "./database/mongoConnection.js";
import { Post } from "./models/post.js";

dbConnection();
const app = express();

app.get('/', async(req , res)=>{

  request.get({ url: 'https://jsonplaceholder.typicode.com/posts', json: true }, (error, response) => {
    if(error){
      return res.send(error);
    }else{
      const data = response.body;
      Post.insertMany(data).then(function(){ 
            console.log("Data inserted")  // Success 
        }).catch(function(error){ 
            console.log(error)      // Failure 
        });
      return res.send(response);
    }
 });

});

app.listen('3000',()=>{
    console.log(`server run at 3000`);
});