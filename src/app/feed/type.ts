interface Image {
    url: string;
}
interface User {
    id: string;
    tag: string;
    name: string;
    image: Image;
}
interface Comment {
    count: number;
}
interface Like {
    count: number;
}
interface View {
    count: number;
}
interface Retweet {
    count: number;
}

export interface Post {
    id: string;
    user: User;
    createAt: string;
    title: string;
    images: Image[];
    comment: Comment;
    like: Like;
    view: View;
    retweet: Retweet;
    tags: string[]
}
