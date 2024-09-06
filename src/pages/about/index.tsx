import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header"
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import SecondPageDescription from "@/components/SecondPageDescription/SecondPageDescription";

export default function About() {
    return (
        <>
            <SecondPageDescription/>
            <HelpRaiseCash/>
            <JoinVolunteers/>
      </>
    );
}