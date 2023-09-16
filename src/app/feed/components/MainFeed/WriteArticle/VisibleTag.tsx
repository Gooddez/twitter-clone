"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

enum VisibleMode {
    everyone = "Everyone",
    twitterCircle = "Twitter Circle",
}

const VisibleTag: React.FC<{}> = () => {
    const [visibleMode] = useState<VisibleMode>(VisibleMode.everyone);

    return (
        <div className="flex items-center gap-x-2 self-start rounded-full border border-border px-3  text-primary">
            <div className="text-sm">{visibleMode}</div>
            <Icon icon="tabler:chevron-down" />
        </div>
    );
};

export default VisibleTag;
