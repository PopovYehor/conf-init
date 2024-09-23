import Image from "next/image";
import style from "./EmployeeItem.module.scss";
import { IImageItem } from "@/interfaces/image/image.interfaces";


export default function EmployeeItem({ img, name, role, desc }:
    {img:string, name:string, role:string, desc:string}
) {
    return (
        <div className={style.member}>
            <Image src={img} alt="" width={369.5} height={468} className={style.img}></Image>
            <h1>{name}</h1>
            <h3>{role}</h3>
            <p>{desc}</p>
        </div>
    )
}