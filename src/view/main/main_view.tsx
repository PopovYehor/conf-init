import Baner from "@/components/baner/baner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import JoinVolunteers from "@/components/JoinVolunteers/JoinVolunteers";

export default function MainView() {
    return (
      <>
        <Header />
        <Baner />

        <JoinVolunteers />
        <Footer />
      </>
    );
};
