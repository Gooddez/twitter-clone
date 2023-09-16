const TextField: React.FC<{
    setArticleInput: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setArticleInput }) => {
    return (
        <input
            onChange={(e) => setArticleInput(e.target.value)}
            type="text"
            className="ml-1 break-all border-none bg-transparent text-xl outline-none placeholder:text-[#6f747a] "
            placeholder="What is happening?!"
        />
    );
};

export default TextField;
