"use client";

import { Icon } from "@iconify/react";

const icons = [
    "ri:image-line",
    "fluent:gif-24-regular",
    "ic:outline-poll",
    "mingcute:emoji-line",
    "fluent-mdl2:date-time-12",
    "ion:location-outline",
];

const InsertAble: React.FC<{ articleInput: string }> = ({ articleInput }) => {
    return (
        <div className="ml-1 flex justify-between">
            <div className="flex  gap-x-3 text-lg  text-primary">
                {icons.map((icon) => (
                    <div
                        key={icon}
                        className="flex h-7 w-7  cursor-pointer items-center justify-center rounded-full hover:bg-primary-glass"
                    >
                        <Icon icon={icon} />
                    </div>
                ))}
            </div>
            <button
                disabled={articleInput.length == 0}
                className="rounded-full  bg-primary px-4 py-[8px] text-sm font-bold disabled:opacity-50"
            >
                Tweet
            </button>
        </div>
    );
};

export default InsertAble;
