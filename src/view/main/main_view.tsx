import Baner from "@/components/main/baner/baner";
import Evants from "@/components/main/evants/evants";
import { fetchMain } from "@/reducers/main/main.reducer";
import { useAppDispatch } from "@/hooks/hooks";
import { useEffect } from "react";
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import NeedSupport from "@/components/NeedSupport/NeedSupport";
import HowWeHelps from "@/components/main/howWeHelps/howWeHalps";
import { Worth } from "@/components/main/worth/worth";
import { Partners } from "@/components/main/partners/partners";

export default function MainView() {
    
    return (
      <>
        <main>
        <Baner />
        <Worth/>
        <Evants/>
        <HowWeHelps/>
        {/* <NeedSupport/>
        <HelpRaiseCash />
        <JoinVolunteers /> */}
        <Partners/>
        </main>
      </>
    );
};
