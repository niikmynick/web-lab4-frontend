export function checkStatus(x, y, r) {
    if (x >= 0) {
        if (y >= 0) {
            return (x + y) <= (r);
        } else {
            return (x <= r) && (y >= -r);
        }
    } else {
        if (y >= 0) {
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
        } else {
            return false;
        }
    }
}