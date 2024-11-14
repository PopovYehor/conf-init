import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import Baner from "@/components/main/baner/baner";
import Evants from "@/components/main/evants/evants";
import HowWeHelps from "@/components/main/howWeHelps/howWeHalps";
import { Partners } from "@/components/main/partners/partners";
import { Worth } from "@/components/main/worth/worth";
import NeedSupport from "@/components/NeedSupport/NeedSupport";


export default function MainView() {
    
    return (
      <>
        <main>
        <Baner />
        <Worth/>
        <Evants/>
        <HowWeHelps/>
        <NeedSupport/>
        <HelpRaiseCash />
        <JoinVolunteers />
        <Partners/>
        </main>
      </>
    );
};
