import express from "express";

export const router = express.Router();

//  router.get("/",(req,res)=>{
//      console.log("connect");
//  })

router.post("/register", (req, res) => {
    console.log(req.body);
})
router.get("/", (req, res) => {
    res.send('testing respond API')
})