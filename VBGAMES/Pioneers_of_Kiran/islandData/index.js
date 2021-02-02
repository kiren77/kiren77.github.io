import Express from 'express'; 
//needs inclusion of "type": "module" in package.json
import Products from "./products.js";



const app = Express();
const port = 3000;
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

//here we create a middleware function http://expressjs.com/en/resources/middleware.html
// which we will insert as a parameter for the app.get function below
function mid (req, res, next){
//console.log(req.body);
console.log(req.query);
console.log(req.params);
next();
}
// in REST
//GET=get info, PUT=change, POST=add, DELETE=delete

//params of get are "path", 2nd is "query" (req,...),  3rd is callback(...,res)

//middleware function mid below is now a param 
app.get("/products/:id", mid, (req,res) => {
  //app.get("/products/:id", (req,res) => {     // /:id to access the "id" key-value property in products
 // .get = access file  
   //   res.send("Hello World")
  console
   res.json(Products.find((product) => {
  // return +req.params.id needs that + as we return an integer
    return +req.params.id === product.id
   }))
 //res.send(req.params.id)
   // res.json(Products)

})
app.post("/add", (req, res) => {
  console.log(req.body.id)
  res.sendStatus(200);
})

app.listen(port, ()=> 
/*callback to confirm*/console.log("listening on port " + port));
