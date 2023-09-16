import Image from "next/image";

import { Post } from "@/app/feed/type";
import { DateTime } from "luxon";
import PostAction from "./PostAction";

const Post: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="">
            <div className="flex  border-b border-border py-y-main">
                <div className="px-x-main">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                        <Image
                            sizes="50px"
                            src={post.user.image.url}
                            alt=""
                            fill
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex  w-full flex-col gap-y-4 pr-x-main">
                    <div className="flex items-center gap-x-2">
                        <div className="font-bold">{post.user.name}</div>
                        <div className="text-text-dark">{post.user.tag}</div>
                        <div className="h-[2px] w-[2px] rounded-full bg-text-dark " />
                        <div className="flex gap-x-1 text-text-dark">
                            <div className="">
                                {
                                    DateTime.fromISO(post.createAt)
                                        .setZone("Asia/Bangkok")
                                        .setLocale("en").monthLong
                                }
                            </div>
                            <div className="">
                                {DateTime.fromISO(post.createAt).daysInMonth}
                            </div>
                        </div>
                    </div>
                    {post.title.length > 0 && (
                        <div className="whitespace-pre-line">{post.title}</div>
                    )}
                    <div className="flex flex-wrap gap-x-2">
                        {post.tags.map((tag) => (
                            <div className="text-primary">#{tag}</div>
                        ))}
                    </div>
                    {post.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/2] w-full shrink-0 overflow-hidden rounded-2xl border border-border"
                        >
                            <Image
                                src={image.url}
                                sizes="40vw"
                                alt=""
                                fill
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                    <PostAction post={post} />
                </div>
            </div>
        </div>
    );
};

export default Post;
