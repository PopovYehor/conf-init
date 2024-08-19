import style from "./ButtonsSecondary.module.scss";
import Link from "next/link";

export default function ButtonsSecondary(
  { text, url }: { text: string; url: string }
) {
  return (
    <Link href={url} style={{ display: "flex", width: "min-content", textDecoration: "none" }}>
      <button className={style.button}>{text}</button>
    </Link>
  );
}
