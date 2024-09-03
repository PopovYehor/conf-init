import style from "./ButtonsSecondary.module.scss";
import Link from "next/link";

export default function ButtonsSecondary(
  { text, url }: { text: string; url: string }
) {
  return (
    <Link href={url} className={style.button}>{text}</Link>
  );
}
