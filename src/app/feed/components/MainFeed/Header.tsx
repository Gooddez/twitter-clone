"use client";
import { classname } from "@/common/utils/classname";
import { useState } from "react";

enum Mode {
    forYou = "For you",
    following = "Following",
}

const Header: React.FC<{}> = () => {
    const [mode, setMode] = useState<Mode>(Mode.forYou);

    const isActive = (e: Mode) => mode == e;

    const onClickMode = (e: Mode) => {
        setMode(e);
    };

    return (
        <div className="sticky top-0 flex flex-col bg-[#00000090] backdrop-blur-md z-10">
            <div className="flex flex-col ">
                <div className="px-x-main py-y-main text-xl font-bold">
                    Home
                </div>
            </div>
            <div className="flex border-b border-border">
                {Object.values(Mode).map((e, index) => (
                    <div
                        key={index}
                        onClick={() => onClickMode(e)}
                        className={classname(
                            "flex w-full cursor-pointer items-center justify-center transition-colors hover:bg-[#ffffff13]",
                            isActive(e)
                                ? "font-bold text-text"
                                : "font-normal text-text-dark"
                        )}
                    >
                        <div className=" relative py-4">
                            {e}
                            {isActive(e) && (
                                <div className="absolute bottom-0 left-0 h-[4px] w-full rounded-full bg-primary" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
