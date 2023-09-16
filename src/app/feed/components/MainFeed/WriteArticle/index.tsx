import { useState } from 'react'

import Image from "next/image";
import VisibleTag from "./VisibleTag";
import TextField from "./TextField";
import ReplyAbleTag from "./ReplyableTag";
import InsertAble from "./Insertable";

const WriteArticle: React.FC<{}> = () => {

    const [articleInput, setArticleInput] = useState<string>("")

    return (
        <div className="flex  border-b border-border py-y-main">
            <div className="px-x-main">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                        sizes="100px"
                        src="https://pbs.twimg.com/profile_images/1622244035527331840/p3Nr6jt4_normal.png"
                        alt=""
                        fill
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="flex  w-full flex-col gap-y-4 pr-x-main">
                <VisibleTag />
                <TextField setArticleInput={setArticleInput} />
                <ReplyAbleTag />
                <div className="w-full border-t border-border" />
                <InsertAble articleInput={articleInput} />
            </div>
        </div>
    );
};

export default WriteArticle;
