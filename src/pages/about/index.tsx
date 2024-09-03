import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/header"
import HelpRaiseCash from "@/components/HelpRaiseCash/HelpRaiseCash";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";
import SecondPageDescription from "@/components/SecondPageDescription/SecondPageDescription";

export default function About() {
    return (
        <>
            <Header/>
            <SecondPageDescription/>
            <HelpRaiseCash/>
            <JoinVolunteers/>
            <Footer/>
      </>
    );
}