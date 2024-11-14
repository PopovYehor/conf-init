import style from "./ButtonsSecondary.module.scss";
import Link from "next/link";

type TTarget = true

export interface IButtonProps{
  text: string
  url: string
  target?: TTarget
}

export default function ButtonsSecondary(
  { text, url, target } : IButtonProps
) {
  return (
    <Link href={url} className={style.button} target={target&& "_blank"}>{text}</Link>
  );
}
