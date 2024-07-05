'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchTest, SET_TEST } from "@/reducers/test/test.reducer";
import { RootState } from "@/store/store";
import { useEffect } from "react";

export default function Home() {

    const test = useAppSelector((state: RootState)=>state.test)
    const dispatch = useAppDispatch()

    const testHandler = ()=>{
      dispatch(SET_TEST('Change text'))
    }

    useEffect(()=>{
      dispatch(fetchTest())
    },[])

    useEffect(()=>{
      console.log(test.status)
    }, [test])
      
    return (
      <>
      {test.test}
      <button onClick={()=>testHandler()}>click</button>
      </>
    );
}