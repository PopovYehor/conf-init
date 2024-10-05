import Link from "next/link";
import style from "./ButtonsDefault.module.scss";

export default function ButtonsDefault(
  { text, url }: { text: string; url: string }
) {
  return (
    <Link href={url} className={style.button} target="_blank">{text}</Link>
  );
}
