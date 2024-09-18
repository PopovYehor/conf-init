import Image from "next/image";
import style from "./EmployeeItem.module.scss";


export default function EmployeeItem() {
    return (
        <div className={style.member}>
            <Image src="http://res.cloudinary.com/duz9hwe05/image/upload/v1723376798/ezmozrbvwh6dckkh4iru.png" alt="" width={369.5} height={468} className={style.img}></Image>
            <h1>NAME</h1>
            <h3>ROLE</h3>
            <p>description</p>
        </div>
    )
}