"use client";

import { Icon } from "@iconify/react";

const ReplyAbleTag: React.FC<{}> = () => {
    return (
        <div className="ml-2 flex items-center gap-x-2 text-sm text-primary">
            <Icon className="text-[12px] " icon="fontisto:earth" />
            <div className="font-bold">Everyone can reply</div>
        </div>
    );
};

export default ReplyAbleTag;
