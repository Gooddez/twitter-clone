"use client";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";

import { classname } from "@/common/utils/classname";
import TrendSearchResult from "./TrendSearchResult";

const TrendSearchBar: React.FC<{}> = () => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const searchElRef = useRef<HTMLDivElement>(null);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    };

    // const onInputBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    //     setIsFocus(false);
    // };

    const onInputFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocus(true);
    };

    useEffect(() => {
        const onClickEvent = (e: MouseEvent) => {
            const searchEl = searchElRef.current;
            if (!searchEl) return;
            const a = document.getElementById("d");
            if (!searchEl.contains(e.target as Node)) {
                setIsFocus(false);
            }
        };

        window.addEventListener("click", onClickEvent);
        return () => {
            window.removeEventListener("click", onClickEvent);
        };
    }, []);

    return (
        <div
            ref={searchElRef}
            className={classname(
                " relative flex w-full items-center rounded-full border  px-3 py-3 text-[#6f747a]",
                isFocus
                    ? "border-primary bg-background"
                    : "border-transparent bg-background-lighter"
            )}
        >
            <Icon
                icon="carbon:search"
                className={classname(
                    "mr-2 text-lg",
                    isFocus ? "text-primary" : "text-[#6f747a]"
                )}
            />
            <input
                onChange={onInputChange}
                // onBlur={onInputBlur}
                onFocus={onInputFocus}
                type="text"
                placeholder="Search Twitter"
                className="flex-grow border-none bg-transparent text-sm text-text-secondary outline-none placeholder:text-[#6f747a]"
            />
            {isFocus && <TrendSearchResult searchQuery={searchQuery} />}
        </div>
    );
};

export default TrendSearchBar;
