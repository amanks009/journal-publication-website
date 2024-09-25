import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

//ye clodinary ka congigration he 

cloudinary.config({ 
  cloud_name:'dbukjqwtu',
  api_key: 211687865281371, 
  api_secret: "xr-HpxmTGIG3kr4dx1UIQHfaRfI" 
});

const uploadOnCloudinary =async (localFilePath,targetFolder)=>{
     try {
        // console.log("hhhhhhhh");
        if(!localFilePath)return null;
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
            folder:targetFolder
        });
        // console.log("yha pr");
        
      //   console.log("file upload on cloudinary",response.url);
        // fs.unlink(localFilePath, (err) => {
        //   if (err) throw err;
        //   console.log('path/file.txt was deleted');
        // });

        // console.log("oir yha pr");
        
        return response;

     } catch (error) {
        // agar koi problem aai to file ko local server se hata denge;
        console.log("cloudinary====",error);
        fs.unlinkSync(localFilePath);
        return null;

     }
}

export {uploadOnCloudinary}