import Baner from "@/components/main/baner/baner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import Evants from "@/components/main/evants/evants";
import { fetchMain } from "@/reducers/main/main.reducer";
import { useAppDispatch } from "@/hooks/hooks";
import { useEffect } from "react";
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import NeedSupport from "@/components/NeedSupport/NeedSupport";

export default function MainView() {

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchMain())
    },[])
    
    return (
      <>
        <Header/>
        <main>
        <Baner />
        {/* <Evants/> */}
        <NeedSupport/>
        <HelpRaiseCash />
        <JoinVolunteers />
        </main>
        <Footer />
      </>
    );
};
