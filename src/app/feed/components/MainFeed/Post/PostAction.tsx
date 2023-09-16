import { Post } from "@/app/feed/type";
import { Icon } from "@iconify/react";

enum Action {
    retweet = "retweet",
    like = "like",
    comment = "comment",
    view = "view",
}

const actions: { label: Action; icon: string }[] = [
    {
        label: Action.comment,
        icon: "mdi:comment-outline",
    },
    {
        label: Action.retweet,
        icon: "ant-design:retweet-outlined",
    },
    {
        label: Action.like,
        icon: "icon-park-outline:like",
    },
    {
        label: Action.view,
        icon: "mdi:graph-bar",
    },
];

const PostAction: React.FC<{ post: Post }> = ({ post }) => {
    return (
        <div className="flex w-full gap-x-12">
            {actions.map((action) => (
                <div key={action.icon} className="flex items-center gap-x-2 ">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-primary-glass cursor-pointer">
                        <Icon
                            icon={action.icon}
                            className="text-lg text-text-dark"
                        />
                    </div>
                    <div className="text-xs text-text-dark">
                        {post[action.label].count}
                    </div>
                </div>
            ))}
            <div className="flex items-center gap-x-2">
                <Icon icon="uil:upload" className="text-lg text-text-dark" />
            </div>
        </div>
    );
};

export default PostAction;
