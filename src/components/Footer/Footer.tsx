import Link from "next/link";
import style from "./style.module.scss";
import {
  InstagramIconsDefault,
  InstagramIconsHover,
  InstagramIconsPressed,
  InstagramIconsDisabled,
  FacebookIconsDefault,
  FacebookIconsHover,
  FacebookIconsPresed,
  FacebookIconsDisabled,
} from "@/assets/icons-socials/icons-socials";
import { Logo } from "@/assets/logo/logo";

export default function Footer() {


  return (
    <footer className={style.footer}>
      
      <div className={style.wrapper_logos}>
        <div className={style.logo}>
          <a href="">{Logo()}</a>
        </div>

        <div className={style.wrapper_icons}>
          <div className={style.icon_circle}>
            <a href="https://www.instagram.com/conf.bmv/">
              {InstagramIconsDefault()}
            </a>
          </div>

          <div className={style.icon_circle}>
            <a href="https://www.facebook.com/profile.php?id=61559370821121">
              {FacebookIconsDefault()}
            </a>
          </div>
        </div>
      </div>

      <div className={style.wrapper_menu_contacts}>
        <div className={style.wrapper_menu}>
          <p>Меню</p>

          <Link href={"/about"}>Про нас</Link>

          <Link href={"/support"}>Підтримати</Link>

          <Link href={"/projects"}>Наші проєкти</Link>

          <Link href={"/volunteers"}>Волонтери</Link>
        </div>

        <div className={style.wrapper_contacts}>
          <p>Контакти</p>
          <span>Дім {`"Божий Дар"`}</span>
          <span>03035, м.Київ, вул.Кучмин Яр, 1Б</span>

          <a href="tel:+380932175571">+38 093 217 55 71</a>
        </div>
      </div>

      <div className={style.wrapper_politics}>
        <a href="#">Політика конфіденційності</a>
        <a href="#">Публічна оферта</a>
        <a href="#">Політика COOKIE</a>
      </div>
    </footer>
  );
}
