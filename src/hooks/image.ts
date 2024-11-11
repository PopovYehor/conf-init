import { IImageItem } from "@/interfaces/image/image.interfaces"
import React from "react"

interface IGetImage{
    (
        findImage: IImageItem, // an object with a photo to be found
        imagesArray: IImageItem[], // all photos
        hook: React.Dispatch<React.SetStateAction<string>> //installation function
    ): void
}

//the function includes the entire list of photos, the object containing the photo and the function of setting the desired photo

export const getCurrentImage:IGetImage = (findImage, imagesArray, hook)=>{
    if (findImage){ //check props if have one
        imagesArray.forEach((item: IImageItem)=>{ //find current image in array
            if (findImage._id === item._id){ // comparison id
                hook(item.url) //set image
            }
        })
    }
}