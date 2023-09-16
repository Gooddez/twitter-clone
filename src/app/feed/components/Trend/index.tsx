import TrendForYou from "./TrendForYou";
import TrendSearchBar from "./TrendSearchBar";
import TrendWhoToFollow from "./TrendWhoToFollow";

const Trend: React.FC<{}> = () => {
    return (
        <section className="mt-3 sticky top-3 h-full flex w-[400px] px-6 shrink-0 flex-col gap-y-4">
            <TrendSearchBar />
            <TrendForYou />
            <TrendWhoToFollow />
        </section>
    );
};

export default Trend;
