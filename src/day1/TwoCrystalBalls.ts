export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let breakPoint = 0;

    for (let i = 0; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            breakPoint = i;
            break;
        }
    }

    let startPoint = breakPoint - jmpAmount;

    for (let i = startPoint; i <= breakPoint; i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;

}