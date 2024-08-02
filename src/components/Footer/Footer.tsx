import Link from "next/link";
import style from "./style.module.scss";

export default function Footer() {
    return (
      <footer className={style.footer}>
        <div className={style.left_wrapper}>
          <div className={style.left_wrapper_logos}>
            <p>logo</p>
            <div className={style.left_wrapper_icons}>
              <p>1 icon</p>
              <p>2 icon</p>
            </div>
          </div>
          <div className={style.left_wrapper_menu}>
            <p>Меню</p>
            <p>
              <Link href={"/about"}>Про нас</Link>
            </p>
            <p>
              <Link href={"/support"}>Підтримати</Link>
            </p>
            <p>
              <Link href={"/projects"}>Наші проєкти</Link>
            </p>
            <p>
              <Link href={"/volunteers"}>Волонтери</Link>
            </p>
          </div>
        </div>
        <div className={style.right_wrapper}>
          <div className={style.right_wrapper_contacts}>
            <p>Контакти</p>
            <p>Дім ``Божий Дар``</p>
            <p>03035, Київ</p>
            <p>вул. Краснодонська, 1Б</p>
            <a href="tel:+380932175571">+38 093 217 55 71</a>
          </div>
          <div className={style.right_wrapper_politics}>
            <p>Політика конфіденційності</p>
            <p>Публічна оферта</p>
            <p>Політика COOKIE</p>
          </div>
        </div>
      </footer>
    );
}
