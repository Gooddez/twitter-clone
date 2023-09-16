"use client";

import { classname } from "@/common/utils/classname";
import { formatNumber } from "@/common/utils/formatNumber";
import { Icon } from "@iconify/react";
import React from "react";

const trends = [
    {
        hashtag: "แบนEveandboy",
        tweets: "120000",
    },
    {
        hashtag: "ตั้งรัฐบาล",
        tweets: "329000",
    },
    {
        hashtag: "dek66",
        tweets: "156000",
    },
    {
        hashtag: "เรื่องเล่าเช้านี้",
        tweets: "39600",
    },
    {
        hashtag: "แป้งม่วงศรีจันทร์",
        tweets: "17600",
    },
];

const TrendForYou: React.FC<{}> = () => {
    return (
        <div className="flex w-full flex-col rounded-2xl bg-background-lighter">
            <Element className="text-xl font-bold">Trend for you</Element>
            {trends.map((trend) => (
                <Element key={trend.hashtag}>
                    <div className="flex w-full items-start justify-between">
                        <div className="flex flex-col text-sm">
                            <div className=" text-text-dark">
                                Trending in Thailand
                            </div>
                            <span className=" font-bold text-text">
                                #{trend.hashtag}
                            </span>
                            <div className=" text-text-dark">
                                {formatNumber(parseInt(trend.tweets))} Tweets
                            </div>
                        </div>
                        <Icon icon="ant-design:ellipsis-outlined" />
                    </div>
                </Element>
            ))}
        </div>
    );
};

const Element: React.FC<
    { children: React.ReactNode } & React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ children, ...rest }) => {
    return (
        <div
            {...rest}
            className={classname(
                "cursor-pointer px-x-main py-y-main transition-colors hover:bg-[#ffffff06]",
                rest.className ? rest.className : ""
            )}
        >
            {children}
        </div>
    );
};

export default TrendForYou;
