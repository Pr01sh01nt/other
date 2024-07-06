import app from "./app.js";
import cloudinary from "cloudinary"

  

    app.get('*',(req,res)=>{

      res.json({
        server:"server is working"
      })
    });
    

app.listen(8000, ()=>{
    
      console.log(`Server is listening at port 8000`);
})