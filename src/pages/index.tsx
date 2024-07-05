'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchTest, SET_TEST } from "@/reducers/test/test.reducer";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [mobile, setmobile] = useState(false)

  const test = useAppSelector((state: RootState)=>state.test)
  const dispatch = useAppDispatch()

  const testHandler = ()=>{
    setmobile(!mobile)
  }

  useEffect(()=>{
    dispatch(fetchTest())
  },[])

  useEffect(()=>{
    console.log(test.status)
  }, [test])
    
  return (
    <>
    {mobile ? <p>{test.test+' mobile'}</p> : <p>{test.test+' desktop'}</p>}
    <button onClick={()=>{testHandler()}}>click</button>
    </>
  );
}