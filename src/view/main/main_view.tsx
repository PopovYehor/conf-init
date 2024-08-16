import Baner from "@/components/main/baner/baner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/header";
import Evants from "@/components/main/evants/evants";

export default function MainView() {
    return (
        <>
            <Header/>
            <main>
            <Baner/>
            <Evants/>
            </main>
            <Footer/> 
        </>
    );
};
