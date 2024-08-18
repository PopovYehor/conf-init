import Baner from "@/components/main/baner/baner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/header";
import Evants from "@/components/main/evants/evants";
import { fetchMain } from "@/reducers/main/main.reducer";
import { useAppDispatch } from "@/hooks/hooks";
import { useEffect } from "react";

export default function MainView() {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchMain())
    },[])
    
    return (
        <>
            <Header/>
            <main>
            <Baner/>
            {/* <Evants/> */}
            </main>
            <Footer/> 
        </>
    );
};
