import Baner from "@/components/Main/baner/baner";
import Evants from "@/components/Main/evants/evants";
import HowWeHelps from "@/components/Main/howWeHelps/howWeHalps";
import { Worth } from "@/components/Main/worth/worth";
import { Partners } from "@/components/Main/partners/partners";
import NeedSupport from "@/components/NeedSupport/NeedSupport";
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";

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
