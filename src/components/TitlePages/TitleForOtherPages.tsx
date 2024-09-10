import style from "./TitleForOtherPages.module.scss";

export default function TitleForOtherPages({ text }: { text: string }) {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>{text}</h1>
      </div>
    );
}