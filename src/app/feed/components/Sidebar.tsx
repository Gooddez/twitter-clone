"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";

const sidebarList = [
    {
        label: "Home",
        icon: {
            active: "iconamoon:home-fill",
            inactive: "iconamoon:home-fill",
        },
    },
    {
        label: "Explore",
        icon: {
            active: "ph:hash-bold",
            inactive: "ph:hash-bold",
        },
    },
    {
        label: "Notification",
        icon: {
            active: "mdi:bell-outline",
            inactive: "mdi:bell-outline",
        },
    },
    {
        label: "Messages",
        icon: {
            active: "material-symbols:mail-outline",
            inactive: "material-symbols:mail-outline",
        },
    },
    {
        label: "List",
        icon: {
            active: "ri:file-list-2-line",
            inactive: "ri:file-list-2-line",
        },
    },
    {
        label: "Bookmarks",
        icon: {
            active: "material-symbols:bookmark-outline",
            inactive: "material-symbols:bookmark-outline",
        },
    },
    {
        label: "Profile",
        icon: {
            active: "mdi:person-outline",
            inactive: "mdi:person-outline",
        },
    },
    {
        label: "More",
        icon: {
            active: "mingcute:more-3-line",
            inactive: "mingcute:more-3-line",
        },
    },
];
const Sidebar: React.FC<{}> = () => {
    return (
        <div className="sticky top-3 mt-3  flex h-[calc(100vh-16px)] w-[260px] shrink-0 flex-col gap-y-2 px-6">
            <Element>
                <Icon
                    className="text-3xl text-text-secondary"
                    icon="mdi:twitter"
                />
            </Element>
            {sidebarList.map((item) => (
                <Element key={item.label}>
                    <div className="flex items-center ">
                        <Icon
                            className="mr-5 text-[25px]"
                            icon={item.icon.active}
                        />
                        <div className="text-xl">{item.label}</div>
                    </div>
                </Element>
            ))}
            <div className="w-full rounded-full bg-primary py-3 text-center font-bold text-text">
                Tweet
            </div>
            <div className="mb-4 mt-auto flex items-center">
                <div className="relative mr-3 h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                        sizes="100px"
                        src="https://pbs.twimg.com/profile_images/1622244035527331840/p3Nr6jt4_normal.png"
                        alt=""
                        fill
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">Gooddee</div>
                    <div className="text-sm text-text-dark">@Gooddee105971</div>
                </div>
                <Icon
                    className="ml-auto  text-2xl"
                    icon="ant-design:ellipsis-outlined"
                />
            </div>
        </div>
    );
};

const Element: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="cursor-pointer rounded-full px-2 py-3 hover:bg-[#ffffff12]">
            {children}
        </div>
    );
};

export default Sidebar;
