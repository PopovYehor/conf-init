import style from "./ButtonsSecondary.module.scss";
import Link from "next/link";

export default function ButtonsSecondary(
  { text }: { text: string },
  { url }: { url: string }
) {
  return (
    <Link href={url} style={{ textDecoration: "none" }}>
      <button className={style.button}>{text}</button>
    </Link>
  );
}
