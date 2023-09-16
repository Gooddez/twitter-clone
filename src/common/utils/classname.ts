export const classname = (...rest: string[]) => {
    return rest.reduce((acc, cur) => `${acc} ${cur}`, "");
};
