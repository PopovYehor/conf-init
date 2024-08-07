import ImageUA from "@/assets/language-img/language-ukraine.png"
import ImageEN from "@/assets/language-img/language-english.png"
import Image from "next/image";

export const IconsUA = ()=>{
    return <Image src={ImageUA} width={17} height={17} alt="UA"/>
}

export const IconsEN = ()=>{
    return <Image src={ImageEN} width={17} height={17} alt="EN"/>
}

export const IconsListClose = ()=>{
    return(
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8465 0.154589C14.6398 -0.0515298 14.3038 -0.0515298 14.0971 0.154589L7.50725 6.73752L0.904488 0.154589C0.697748 -0.0515298 0.361795 -0.0515298 0.155055 0.154589C-0.051685 0.360709 -0.051685 0.695653 0.155055 0.901772L7.11961 7.84541C7.22298 7.94847 7.35219 8 7.49433 8C7.62354 8 7.76567 7.94847 7.86904 7.84541L14.8336 0.901772C15.0533 0.695653 15.0533 0.360709 14.8465 0.154589Z" fill="black"/>
        </svg>)
}

export const IconsListOpen = ()=>{
    return(
        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.153477 7.84541C0.360216 8.05153 0.696169 8.05153 0.902909 7.84541L7.49275 1.26248L14.0955 7.84541C14.3023 8.05153 14.6382 8.05153 14.8449 7.84541C15.0517 7.63929 15.0517 7.30435 14.8449 7.09823L7.88039 0.15459C7.77702 0.0515304 7.64781 0 7.50567 0C7.37646 0 7.23433 0.0515304 7.13096 0.15459L0.166397 7.09823C-0.0532637 7.30435 -0.0532637 7.63929 0.153477 7.84541Z" fill="black"/>
        </svg>)
}

export const IconsListSelected = ()=>{
    return(
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9501 0.680534L4.70506 7.98495L1.02281 4.7033C0.765895 4.47234 0.374641 4.50258 0.14868 4.7715C0.0409611 4.90209 -0.0110411 5.06807 0.00195947 5.23984C0.01496 5.41161 0.091106 5.5673 0.216778 5.67924L4.32742 9.34496C4.44009 9.44467 4.5831 9.5 4.73044 9.5C4.89264 9.5 5.04555 9.43567 5.16193 9.31858L12.8131 1.60372C13.0576 1.35668 13.0625 0.948805 12.8261 0.695331C12.5902 0.440571 12.1989 0.433494 11.9501 0.680534Z" fill="#288607"/>
        </svg>)
}