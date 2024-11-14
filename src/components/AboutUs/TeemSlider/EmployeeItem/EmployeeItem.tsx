import style from "./EmployeeItem.module.scss";


export default function EmployeeItem({ img, name, role, desc }:
    {img:string, name:string, role:string, desc:string}
) {
    return (
      <div className={style.member}>
        <img src={img} alt={name} className={style.img} loading="lazy"></img>
        <h2 className={style.name}>{name}</h2>
        <h3 className={style.role}>{role}</h3>
        <span className={style.desc}>{desc}</span>
      </div>
    );
}