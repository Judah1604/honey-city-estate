import Clients from "./Home/Clients";
import HeroSection from "./Home/HeroSection";
import Values from "./Home/Values";
import Estate from "./components/Estate";

export default function Page() {
    return (
        <>
            <HeroSection />
            <Values />
            <Estate />
            <Clients />
        </>
    );
}
