import React from "react";

interface Props {
    searchQuery: string;
}

const TrendSearchResult: React.FC<Props> = ({ searchQuery }) => {
    const emptySearch = (
        <div className="text-sm text-center min-h-[70px]">Try searching for people, topics, or keywords</div>
    );

    const nonEmptySearch = <div className="">Search for "{searchQuery}"</div>;

    return (
        <div className="absolute left-0 top-[102%] flex w-[105%] flex-col px-3 py-3 shadow-white-blur z-20 bg-background rounded-md ">
            {searchQuery.length == 0 ? emptySearch : nonEmptySearch}
        </div>
    );
};

export default TrendSearchResult;
