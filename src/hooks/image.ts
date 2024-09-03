import { IImageItem } from "@/interfaces/image/image.interfaces"
import React from "react"

interface IGetImage{
    (
        findImage: IImageItem,
        imagesArray: IImageItem[],
        hook: React.Dispatch<React.SetStateAction<string>>
    ): void
}

export const getCurrentImage:IGetImage = (findImage, imagesArray, hook)=>{
    if (findImage){ //check props if have one
        imagesArray.forEach((item: IImageItem)=>{ //find current image in array
            if (findImage._id === item._id){
                hook(item.url) //set image
            }
        })
    }
}