import style from "./TeemSlider.module.scss";

import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls";
import { useAppSelector } from "@/hooks/hooks";
import axios from "axios";
import { IImageItem } from "@/interfaces/image/image.interfaces";
import { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem/EmployeeItem";

export default function TeemSlider() {


    return (
      <section className={style.wrapper}>
        <h1>Наша Команда</h1>
        <p>
          Якщо ви бажаєте приєднатися до нашої команди, зв`яжіться з нами поштою
        </p>
        <div className={style.slider_wrapper}>
          <div>
            <EmployeeItem />
          </div>
          <div>
            <EmployeeItem />
          </div>
          <div>
            <EmployeeItem />
          </div>
            </div>
            <div>. . .</div>
      </section>
    );
}