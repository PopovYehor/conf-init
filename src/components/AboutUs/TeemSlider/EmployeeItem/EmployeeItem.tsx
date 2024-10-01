import Image from "next/image";
import style from "./EmployeeItem.module.scss";


export default function EmployeeItem({ img, name, role, desc }:
    {img:string, name:string, role:string, desc:string}
) {
    return (
      <div className={style.member}>
        <img src={img} alt={name} className={style.img}></img>
        <h1>{name}</h1>
        <h3>{role}</h3>
        <p>{desc}</p>
      </div>
    );
}