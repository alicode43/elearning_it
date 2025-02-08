"use client";
import React, { useRef ,useState} from "react";
import { IKUpload } from "imagekitio-next";
import { Loader2 } from "lucide-react";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

interface FileUploadProps {
    onSuccess:(res:IKUploadResponse)=>void;
    onProgress:(progress:number)=>void;
    fileType?: "image" |"video"|"ppt"|"pdf"
}




export default function FileUpload({
    onSuccess,
    onProgress,
    fileType

}:FileUploadProps) {
    const [uploading,setUploading]=useState(false);
    const [errors,setErrors]=useState<string|null>(null);

    const onError = (err:{message:string}) => {
        console.log("Error", err);
        setErrors(err.message);
        setUploading(false);
      };
      const handleSuccess = (response:IKUploadResponse) => {
        console.log("Progress", response);
        setUploading(false);
        setErrors(null);
        onSuccess(response);
      };

    const handleProgess = (evt:ProgressEvent) => {
        // console.log("Progress", progress);
        if(evt.lengthComputable && onProgress){
         const percentComplete = (evt.loaded / evt.total) * 100; 
            onProgress(Math.round(percentComplete));  
        }
        // setUploading(true);
        // setErrors(null);
      };

      const handleStartUpload  = () => {
      
        setUploading(true);
        setErrors(null);
      }; 

      const validateFile = (file:File) => {
        if(fileType==="image"){
            if(!file.type.startsWith("image/")){
             setErrors("Please upload an image file");
             return false;
            }
            const validTypes=["image/jpeg","image/png","image/jpg"];
            if(!validTypes.includes(file.type)){
                setErrors("Please upload a valid image file");
                return false;
            }
            return file.size < 20000000;
        }
        if(fileType==="video"){
            return file.size < 20000000;
        }
        if(fileType==="ppt"){
            return file.size < 2000000;
        }
        if(fileType==="pdf"){
            return file.size < 2000000;
        }
        return false;
      }


  const ikUploadRefTest = useRef(null);
  return (
    <div className="space-y-2">
  
        <IKUpload
          fileName={fileType==="video"?"video":"image"}
          tags={["sample-tag1", "sample-tag2"]}
          customCoordinates={"10,10,10,10"}
          isPrivateFile={false}
          useUniqueFileName={true}
          responseFields={["tags"]}
          validateFile={validateFile}
          folder={"/sample-folder"}
 
          webhookUrl="https://www.example.com/imagekit-webhook" // replace with your webhookUrl
          overwriteFile={true}
          overwriteAITags={true}
          overwriteTags={true}
          overwriteCustomMetadata={true}
    
          onError={onError}
          onSuccess={handleSuccess}
          onUploadProgress={handleProgess}
          onUploadStart={handleStartUpload}
          transformation={{
            pre: "l-text,i-Imagekit,fs-50,l-end",
            post: [
              {
                type: "transformation",
                value: "w-100",
              },
            ],
          }}
          style={{display: 'none'}} // hide the default input and use the custom upload button
          ref={ikUploadRefTest}
        />
        {
            uploading &&(
                <div className="flex items-center space-x-2">
                <Loader2 className="animate-spin" size={20} />
                <span>Uploading...</span>
              </div>
            )
        }
        {
            errors &&(
                <div className="text-red-500">{errors}</div>
            )
        }
 
    
    </div>
  );
}
