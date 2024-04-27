
/**
 * 
 * @param {*} str 
 * @returns 
 */
export function camel2Underline(str: string) {
    return str.replace(/([A-Z])/g, (match, ...args) => {
        const offset = args.at(-2);
        return offset === 0 ? match.toLowerCase() : `_${match.toLowerCase()}`;
    });
}