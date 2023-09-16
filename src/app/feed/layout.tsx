import Sidebar from "./components/Sidebar";
import Trend from "./components/Trend";

const FeedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // tailwind
    return (
        <section className="relative  mx-auto flex max-w-[1300px] justify-center self-start ">
            <Sidebar />
            {children}
            <Trend />
        </section>
    );
};

export default FeedLayout;
