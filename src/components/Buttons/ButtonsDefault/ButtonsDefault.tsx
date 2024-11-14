import Link from "next/link";
import style from "./ButtonsDefault.module.scss";
import { IButtonProps } from "../ButtonsSecondary/ButtonsSecondary";

export default function ButtonsDefault(
  { text, url, target }: IButtonProps
) {
  return (
    <Link href={url} className={style.button} target={target&& "_blank"}>{text}</Link>
  );
}
