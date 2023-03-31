export default function bs_list(haystack: number[], needle: number): boolean {

    let start = 0;
    let end = haystack.length - 1;

    while (start + 1 < end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (haystack[mid] >= needle) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if (haystack[start] === needle || haystack[end] === needle) {
        return true;
    }

    return false;

}