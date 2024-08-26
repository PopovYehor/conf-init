import Baner from "@/components/main/baner/baner";
import Evants from "@/components/main/evants/evants";
import { fetchMain } from "@/reducers/main/main.reducer";
import { useAppDispatch } from "@/hooks/hooks";
import { useEffect } from "react";
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";

export default function MainView() {
    
    return (
      <>
        <main>
        <Baner />
        <Evants/>
        {/* <HelpRaiseCash />
        <JoinVolunteers /> */}
        </main>
      </>
    );
};
