export function generateRandom(min, max, decimals) {
    if (decimals) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}