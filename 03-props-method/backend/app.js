import  Express from "express";
import cors from "cors";
const app = Express();
app.use(cors());


app.get("/sopas", (req, res) => {
  let data ={message:"Hello World!"}
  res.status(200).json(data.message);
});

app.listen(4555,()=>{
  console.log(`http://localhost:4550`);
})