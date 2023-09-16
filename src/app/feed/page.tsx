"use client";

import Header from "./components/MainFeed/Header";
import PostComponent from "./components/MainFeed/Post";
import WriteArticle from "./components/MainFeed/WriteArticle";
import { Post } from "./type";

const posts: Post[] = [
    {
        id: "ngfn1",
        user: {
            id: "12345566",
            name: "Netflixth",
            tag: "@netflixth",
            image: {
                url: "https://pbs.twimg.com/profile_images/856909714390634496/GrQzag25_normal.jpg",
            },
        },
        createAt: "2020-05-11T20:14:14.796Z",
        title: "กินบุฟเฟต์ยังไง ให้พนักงานยืนงง\nใครยังไม่ได้ดู  ‘เธอกับฉันกับฉัน’ เจอกัน ที่ Netflix ได้เลยครับ",
        images: [
            {
                url: "https://pbs.twimg.com/media/FwXQSulacAEdY8B?format=png&name=small",
            },
        ],
        comment: {
            count: 8,
        },
        like: {
            count: 199,
        },
        view: {
            count: 199,
        },
        retweet: {
            count: 59,
        },
        tags: ["Teletubbies", "NetflixTH"],
    },
    {
        id: "awfg2",
        user: {
            id: "12345566",
            name: "Netflixth",
            tag: "@netflixth",
            image: {
                url: "https://pbs.twimg.com/profile_images/856909714390634496/GrQzag25_normal.jpg",
            },
        },
        createAt: "2020-05-11T20:14:14.796Z",
        title: "กินบุฟเฟต์ยังไง ให้พนักงานยืนงง\nใครยังไม่ได้ดู  ‘เธอกับฉันกับฉัน’ เจอกัน ที่ Netflix ได้เลยครับ",
        images: [
            {
                url: "https://pbs.twimg.com/media/FwXQSulacAEdY8B?format=png&name=small",
            },
        ],
        comment: {
            count: 8,
        },
        like: {
            count: 199,
        },
        view: {
            count: 199,
        },
        retweet: {
            count: 59,
        },
        tags: ["Teletubbies", "NetflixTH"],
    },
    {
        id: "awd3",
        user: {
            id: "12345566",
            name: "M1z",
            tag: "@jhigf2008",
            image: {
                url: "https://pbs.twimg.com/profile_images/1660928689650176000/crTw-qk8_400x400.jpg",
            },
        },
        createAt: "2020-05-11T20:14:14.796Z",
        title: "",
        images: [
            {
                url: "https://pbs.twimg.com/media/Fwu8WXiaIAE5vYt?format=jpg&name=small",
            },
        ],
        comment: {
            count: 8,
        },
        like: {
            count: 199,
        },
        view: {
            count: 199,
        },
        retweet: {
            count: 59,
        },
        tags: ["甘雨", "ganyu"],
    },
    {
        id: "4awdaw",
        user: {
            id: "12345566",
            name: "Positivity",
            tag: "@PositivitySaid",
            image: {
                url: "https://pbs.twimg.com/profile_images/1657447704211980289/reMLR2G-_400x400.jpg",
            },
        },
        createAt: "2020-05-11T20:14:14.796Z",
        title: "กินบุฟเฟต์ยังไง ให้พนักงานยืนงง\nใครยังไม่ได้ดู  ‘เธอกับฉันกับฉัน’ เจอกัน ที่ Netflix ได้เลยครับ",
        images: [
            {
                url: "https://pbs.twimg.com/media/Fwe-sdMWcAE_C7N?format=jpg&name=small",
            },
        ],
        comment: {
            count: 8,
        },
        like: {
            count: 199,
        },
        view: {
            count: 199,
        },
        retweet: {
            count: 59,
        },
        tags: ["Teletubbies", "NetflixTH"],
    },
];

const Feed: React.FC<{}> = () => {
    return (
        <div className="flex w-full flex-col border-l border-r border-border ">
            <Header />
            <WriteArticle />
            {posts.map((post, index) => (
                <PostComponent key={post.id + index} post={post} />
            ))}
        </div>
    );
};

export default Feed;
