import { useAppSelector } from "@/hooks/hooks";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";


export default function SecondPageDescription() {
    const isMobile = useAppSelector((state) => state.mobile.mobile);

    return (
      <>
        {!isMobile ?
        
            <Desktop />
            :
            <Mobile />
        }
      </>
    );
}