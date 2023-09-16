import React from "react";
import Image from "next/image";

const whoToFollow = [
    {
        name: "Jackson Wang",
        image: "https://pbs.twimg.com/profile_images/1568125934846509059/vlHSZwY2_normal.jpg",
        tag: "@JacksonWang852",
    },
    {
        name: "Jomquan",
        image: "https://pbs.twimg.com/profile_images/1477805864778039297/9Ruez4dz_bigger.jpg",
        tag: "@jomquan",
    },
    {
        name: "LoveMake.eth",
        image: "https://pbs.twimg.com/profile_images/1586086804658216960/M-IzNckz_bigger.png",
        tag: "@g13m",
    },
];

const TrendWhoToFollow: React.FC<{}> = () => {
    return (
        <div className="flex flex-col rounded-2xl bg-background-lighter">
            <div className="px-x-main py-y-main text-xl font-bold">
                Who to follow
            </div>
            {whoToFollow.map((person) => (
                <div className="flex justify-between px-x-main py-y-main hover:bg-[#ffffff06] cursor-pointer">
                    <div className="flex gap-x-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                                sizes="100px"
                                src={person.image}
                                alt=""
                                fill
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-text">
                                {person.name}
                            </div>
                            <div className=" text-text-dark">{person.tag}</div>
                        </div>
                    </div>
                    <div className="self-center rounded-full bg-white px-x-main py-2 text-sm font-bold text-background hover:bg-[#efefef]">
                        Follow
                    </div>
                </div>
            ))}
            <div className="flex justify-between px-x-main py-y-main text-primary">
                show more
            </div>
        </div>
    );
};

export default TrendWhoToFollow;
